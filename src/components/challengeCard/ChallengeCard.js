import React from 'react';

import './challengeCard.scss';

function ChallengeCard(props) {
    return (
        <>
            <div className="challenge-card__container">
                <img
                    className="challenge-card__image"
                    src={props.image}
                    alt={`${props.name}'s pic`}
                    loading="eager"
                />
            </div>
            <h3 className="challenge-card__title">{props.name}</h3> 
        </>
    );
}

export default ChallengeCard;
