import React from 'react';
import { Link } from 'react-router-dom';
import './challengeDetail.scss';

function ChallengeDetail({ challenge }) {
    return (
        <div className="modal">
            <Link className="button__wrapp" to="/">
                <button className="button__close">X</button>
            </Link>
            <div className="modal__content wrapper">
                <div className="modal__content-image">
                    <img
                        className="image"
                        src={challenge.image}
                        alt={`${challenge.name}´s pic`}
                    ></img>
                </div>
                <div className="modal__content-info">
                    <h1 className="modal__title">{challenge.name}</h1>
                    <p className="modal__description">
                        {challenge.description}
                    </p>
                    <span className="modal__type">{challenge.type}</span>
                </div>
            </div>
        </div>
    );
}

export default ChallengeDetail;
