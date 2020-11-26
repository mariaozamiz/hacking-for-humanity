const getChallenges = () => {
    return getDataFromApi()
        .then((response) => response.json())
        .then((data) => {
            return data.records.map((record) => {
                return {
                    id: record.id,
                    name: record.fields.name,
                    description: record.fields.description,
                    image: record.fields.image,
                    type: record.fields.type
                }
            })
        })
        .catch((error) => {
            console.error(error)
        })
}

const getDataFromApi = () => {
    return fetch('http://35.180.227.252/challenges/')
        .catch((error) => {
            console.error('Error connecting to API:', error)
            return fetch('https://api.airtable.com/v0/app78rjhFfSaZp3fl/challenges?api_key=keyZ7hg5DA2tYaRqh')
        })
}

export default getChallenges