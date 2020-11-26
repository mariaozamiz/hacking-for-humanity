const getImpact = function (options) {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geolocationSuccess(resolve, reject), reject, options)
        } else {
            console.error('Geolocation unavailable in this device')
            reject({ error: 'Geolocation unavailable in this device' })
        }
    })
}

const geolocationSuccess = (resolve, reject) => {
    return (position) => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=ea06f889078043ec889ea061a1a14171&no_annotations=1&language=es`)
            .then((response) => response.json())
            .then((data) => {
                const location = data.results[0].components
                if (location.country_code === 'es') { // Get impact for Spain
                    fetch('https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_ia14d.csv')
                        .then((response) => response.text())
                        .then((text) => {
                            const stateName = getStateName(location.state_code)
                            const statePos = text.lastIndexOf(stateName)
                            // Get ia14d from dataset
                            let stateInfo = text.substring(statePos)
                            let regexp = `${stateName},(\\d+.\\d*)`
                            //console.log(regexp)
                            let re = new RegExp(regexp, "g")
                            let results = re.exec(stateInfo)
                            const ia14d = parseFloat(results[1])
                            resolve({
                                ia14d
                            })
                        })
                        .catch(reject)
                } else { // Get fatality rate for the rest of the world (not Spain)
                    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=ea06f889078043ec889ea061a1a14171&no_annotations=1&language=en`)
                        .then((response) => response.json())
                        .then((data) => {
                            const location = data.results[0].components
                            fetch(`https://covid-api.com/api/reports?iso=${location["ISO_3166-1_alpha-3"]}`)
                                .then((response) => response.json())
                                .then((json) => {
                                    let stateInfo = json.data.find((reg) => {
                                        return reg.region.province === location.state
                                    })
                                    if (stateInfo) {
                                        resolve({ fatality: stateInfo.fatality_rate })
                                    } else {
                                        resolve({ fatality: json.data[0].fatality_rate })
                                    }
                                })
                                .catch(reject)
                        })
                }
            })
            .catch(reject)
    }
}

const getStateName = (stateCode) => {
    switch (stateCode) {
        case 'EX':
            return 'Extremadura'
        case 'CN':
            return 'Canarias'
        case 'CL':
            return 'Castilla y León'
        case 'AS':
            return 'Asturias'
        case 'PV':
            return 'País Vasco'
        case 'RI':
            return 'La Rioja'
        case 'ML':
            return 'Melilla'
        case 'CE':
            return 'Ceuta'
        case 'CB':
            return 'Cantabria'
        case 'AR':
            return 'Aragón'
        case 'AN':
            return 'Andalucía'
        case 'MC':
            return 'Murcia'
        case 'CM':
            return 'Castilla La Mancha'
        case 'NC':
            return 'Navarra'
        case 'CT':
            return 'Cataluña'
        case 'VC':
            return 'C. Valenciana'
        case 'GA':
            return 'Galicia'
        case 'MD':
            return 'Madrid'
        case 'IB':
            return 'Baleares'
        default:
            return 'España'
    }
}

export default getImpact