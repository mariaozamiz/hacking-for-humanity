import React from 'react';
import ChallengeCard from '../challengeCard/ChallengeCard';
import './challengesList.scss';
import lieManChair from '../../assets/icons/lie_man_chair.svg';

function ChallengesList({ challenges }) {
    console.log(challenges);
    const challengesInfo = challenges.map((challenge) => {
        return (
            <li key={challenge.id} className="challenge-card">
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
