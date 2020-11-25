import React from 'react';
import { Link } from 'react-router-dom';
import './challengeDetail.scss';

function ChallengeDetail({ challenge }) {
    const saveChallenge = (ev) => {
        ev.preventDefault();
    };

    return (
        <div className={`modal ${challenge.type}`}>
            <Link className="button__wrapp" to="/App">
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
                    <button
                        onClick={saveChallenge}
                        className="modal__button--accept"
                    >
                        Acepto el reto
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChallengeDetail;
