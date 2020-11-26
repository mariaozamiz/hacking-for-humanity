const getChallenges = () => {
  return fetch(`${API_URL}/challenges/`)
    .then((response) => response.json())
    .then((data) => {
      return data.records.map((record) => {
        return {
          id: record.id,
          name: record.fields.name,
          description: record.fields.description,
          image: record.fields.image,
          type: record.fields.type,
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getChallenges;

const getMe = () => {
  return fetch(`${API_URL}/users/me/`)
    .then((response) => response.json())
    .then((data) => {
      return data.records.map((record) => {
        return {
          id: record.id,
          name: record.fields.name,
          description: record.fields.description,
          image: record.fields.image,
          type: record.fields.type,
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getMe;

const createUser = () => {
  return fetch(`${API_URL}/users/`)
    .then((response) => response.json())
    .then((data) => {
      return data.records.map((record) => {
        return {
          id: record.id,
          name: record.fields.name,
          description: record.fields.description,
          image: record.fields.image,
          type: record.fields.type,
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default createUser;

const suscribeToChallenge = () => {
  return fetch(`${API_URL}/challenges/${challenge_id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.records.map((record) => {
        return {
          id: record.id,
          name: record.fields.name,
          description: record.fields.description,
          image: record.fields.image,
          type: record.fields.type,
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default suscribeToChallenge;

const completeChallenge = () => {
  return fetch(`${API_URL}/challenges/${challenge_id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.records.map((record) => {
        return {
          id: record.id,
          name: record.fields.name,
          description: record.fields.description,
          image: record.fields.image,
          type: record.fields.type,
        };
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default completeChallenge;
