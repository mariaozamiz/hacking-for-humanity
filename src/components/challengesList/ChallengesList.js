import React from 'react';
import ChallengeCard from '../challengeCard/ChallengeCard';
import './challengesList.scss';

function ChallengesList({ challenges }) {
    const challengesInfo = challenges.map((challenge) => {
        return (
            <li key={challenge.id} className={`challenge-card ${challenge.type}`}>
                <ChallengeCard
                    id={challenge.id}
                    type={challenge.type}
                    image={challenge.image}
                    name={challenge.name}
                    description={challenge.description}
                />
            </li>
        );
    });
    return <ul className="challenge-list">{challengesInfo}</ul>;
}

export default ChallengesList;
