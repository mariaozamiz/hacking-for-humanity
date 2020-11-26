import React from 'react';
import ChallengeCard from '../challengeCard/ChallengeCard';
import './challengesList.scss';

function ChallengesList({ challenges }) {
    const challengesInfo = challenges.map((challenge) => {
        return ( 
            <ChallengeCard
                key={challenge.id}
                id={challenge.id}
                type={challenge.type}
                image={challenge.image}
                name={challenge.name}
                description={challenge.description}
            />     
        );
    });
    return <ul className="challenge-list">{challengesInfo}</ul>;
};

export default ChallengesList;
