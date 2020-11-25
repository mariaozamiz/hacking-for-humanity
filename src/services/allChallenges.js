import challenges from './challenges.json';

const allChallenges = () => {
    const dataFromJson = challenges.map((challenge) => {
        return challenge;
    });
    return dataFromJson;
};

export default allChallenges;
