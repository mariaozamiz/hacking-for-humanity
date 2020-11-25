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
                <img
                    className="challenge-card__image"
                    src={props.image}
                    alt={`${props.name}'s pic`}
                    loading="eager"
                ></img>
                <div className="challenge-card__info">
                    <h1 className="challenge-card__name">{props.name}</h1>
                    <h2 className="challenge-card__species">{props.species}</h2>
                </div>
            </Link>
        </>
    );
}

export default ChallengeCard;
