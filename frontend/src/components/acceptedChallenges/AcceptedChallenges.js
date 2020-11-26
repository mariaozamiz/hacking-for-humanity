import React from 'react';
import ChallengeCard from '../challengeCard/ChallengeCard';
import './acceptedChallenges.scss';

const AcceptedChallenges = ({ acceptedChallenges }) => {
    const acceptedChallengesInfo = acceptedChallenges.map((acceptedChallenge) => {
        return ( 
            <ChallengeCard
                key={acceptedChallenge.id}
                id={acceptedChallenge.id}
                type={acceptedChallenge.type}
                image={acceptedChallenge.image}
                name={acceptedChallenge.name}
                description={acceptedChallenge.description}
            />     
        );
    });
    return <ul className="challenge-list">{acceptedChallengesInfo}</ul>;
};

export default AcceptedChallenges;