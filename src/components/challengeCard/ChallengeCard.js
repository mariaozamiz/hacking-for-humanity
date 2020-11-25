import React from 'react';
import { Link } from 'react-router-dom';
import './challengeCard.scss';

function ChallengeCard(props) {
    return (
        <>
            <Link
                to={`/challenge/${props.id}`}
                style={{ textDecoration: 'none' }}
            >
                {' '}
                <div className="challenge-card__container">
                    <img
                        className="challenge-card__image"
                        src={props.image}
                        alt={`${props.name}'s pic`}
                        loading="eager"
                    ></img>
                </div>
                <h3 className="challenge-card__title">{props.name}</h3>
            </Link>
        </>
    );
}

export default ChallengeCard;
