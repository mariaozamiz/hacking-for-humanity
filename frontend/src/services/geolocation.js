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
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=ea06f889078043ec889ea061a1a14171&no_annotations=1`)
            .then((response) => response.json())
            .then((data) => {
                const location = data.results[0].components
                fetch('https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_ia14d.csv')
                    .then((response) => response.text())
                    .then((text) => {
                        const statePos = text.lastIndexOf(location.state)
                        if (statePos !== -1) {
                            // Get ia14d from dataset
                            let stateInfo = text.substring(statePos)
                            let regexp = `${location.state},(\\d+.\\d*)`
                            console.log(regexp)
                            let re = new RegExp(regexp, "g")
                            let results = re.exec(stateInfo)
                            const ia14d = parseFloat(results[1])
                            resolve({
                                ia14d
                            })
                        } else {
                            //look up en la otra API
                        }
                    })
                    .catch(reject)
            })
            .catch(reject)
    }
}

export default getImpact