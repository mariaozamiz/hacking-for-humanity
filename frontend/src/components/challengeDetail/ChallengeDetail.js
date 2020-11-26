import React from 'react';
import { Link } from 'react-router-dom';
import './challengeDetail.scss';

function ChallengeDetail({ challenge, handleAcceptedChallenges, acceptedChallenges }) {
    const handleAccepted = (ev) => {
        handleAcceptedChallenges (ev.target.dataset.id);
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
                    <Link className="btn__container" hidden={acceptedChallenges.find((chall)=>chall.id === challenge.id) ? true : false} to="/App">
                        <button
                            onClick={handleAccepted}
                            className="modal__button--accept"
                            data-id={challenge.id}
                         >Acepto el reto
                        </button>
                    </Link>
                    <section className="share_twitter" hidden={acceptedChallenges.find((chall)=>chall.id === challenge.id) ? false : true}>
                        <p className="share_twitter-text">
                        Comparte en Twitter lo bien que lo estás haciendo!
                        </p>
                        <a className="share_twitter-btn" href="http://twitter.com/share?text=Estoy realizando este reto en Divoc Challenges, te apuntas al cambio?&hashtags=divocmola,consolemio&user_mentions=GirlsinTechEs" target="_blank">Compartir en twitter</a>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ChallengeDetail;
