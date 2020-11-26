const getChallenges = () => {
    return fetch('https://api.airtable.com/v0/app78rjhFfSaZp3fl/challenges?api_key=keyZ7hg5DA2tYaRqh')
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
            console.error(error);
        })
};

export default getChallenges;