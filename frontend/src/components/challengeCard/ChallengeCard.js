import React from 'react';
import { Link } from 'react-router-dom';

import './challengeCard.scss';

function ChallengeCard(props) {
    
    return (
    
        <Link to={`/challenge/${props.id}`}>
            <li key={props.id} className={`challenge-card ${props.type}`}>
                <div className="challenge-card__container" >
                    <img
                    className="challenge-card__image"
                    src={props.image}
                    alt={`${props.name}'s pic`}
                    loading="eager"
                     />
                </div>
                <h2 className="challenge-card__title">{props.name}</h2>   
            </li>
        </Link>
    );
};

export default ChallengeCard;
