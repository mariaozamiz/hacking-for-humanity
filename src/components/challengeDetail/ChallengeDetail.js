import React from 'react';
import { Link } from 'react-router-dom';
import './challengeDetail.scss';

function ChallengeDetail(props) {
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__button">
                    <Link to="/">
                        <div x></div>
                    </Link>
                </div>
                <div className="modal__content">
                    <div className="modal__content-image">
                        <img
                            className="image"
                            src={props.challenge.image}
                            alt={`${props.challenge.name}´s pic`}
                        ></img>
                    </div>
                    <div className="modal__content-info">
                        <ul className="modal__content-list">
                            <li className="modal__list-name">
                                {props.challenge.name}
                            </li>
                            <li>{`Status: ${props.challenge.status}`}</li>
                            <li>{`Species: ${props.challenge.species}`}</li>
                            <li>{`Origin: ${props.challenge.origin.name}`}</li>
                            <li>{`Episodes: ${props.challenge.episodes.length}`}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default ChallengeDetail;
