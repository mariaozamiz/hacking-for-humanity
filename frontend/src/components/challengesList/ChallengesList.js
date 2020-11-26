import React from 'react';
import { Link } from 'react-router-dom';
import ChallengeCard from '../challengeCard/ChallengeCard';
import './challengesList.scss';

function ChallengesList({ challenges }) {
    const challengesInfo = challenges.map((challenge) => {
        return (
            <Link
                to={`/challenge/${challenge.id}`}
                style={{ textDecoration: 'none' }}
            >
                <li key={challenge.id} className={`challenge-card ${challenge.type}`}>
                     <ChallengeCard
                        id={challenge.id}
                        type={challenge.type}
                        image={challenge.image}
                        name={challenge.name}
                        description={challenge.description}
                    />
                </li>
            </Link>
        );
    });
    return <ul className="challenge-list">{challengesInfo}</ul>;
}

export default ChallengesList;
