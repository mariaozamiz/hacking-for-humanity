import React from 'react';
import { Link } from 'react-router-dom';
import './challengeCard.scss';

function ChallengeCard({ id, type, image, name, description }) {
    return (
        <>
            <Link to={`/challenge/${id}`} style={{ textDecoration: 'none' }}>
                <img
                    className="challenge-card__image"
                    src={image}
                    alt={`${name}'s pic`}
                    loading="eager"
                ></img>
                <div className="challenge-card__info">
                    <h1 className="challenge-card__name">{name}</h1>
                    <h2 className="challenge-card__species">{type}</h2>
                </div>
            </Link>
        </>
    );
}

export default ChallengeCard;
