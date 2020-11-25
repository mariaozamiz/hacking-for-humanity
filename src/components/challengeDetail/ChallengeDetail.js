import React from 'react';
import { Link } from 'react-router-dom';
import './challengeDetail.scss';

function ChallengeDetail() {
    return (
        <div className="modal">
            <Link className="button__wrapp" to="/">
                <button className="button__close">X</button>
            </Link>
            <div className="modal__content wrapper">
                <div className="modal__content-image">
                    <img
                        className="image"
                        src="https://cocomaterial.com/media/lie_man_chair.svg"
                        alt=""
                        // src={challenge.image}
                        // alt={`${challenge.name}´s pic`}
                    ></img>
                </div>
                <div className="modal__content-info">
                    <h1 className="modal__title">Medita</h1>
                    <p className="modal__description">
                        Tómate 10 minutos para meditar y sentir agradecimiento
                        por todo lo que eres y tienes.
                    </p>
                    <span className="modal__type">Autocuidado</span>
                </div>
            </div>
        </div>
    );
}

export default ChallengeDetail;
