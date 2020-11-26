import React from 'react';
import './shareTwitter.scss';

const ShareTwitter = () => {
    return (
        <section className="share_twitter">
            <p className="share_twitter-text">
                Comparte en Twitter lo bien que lo estás haciendo!
            </p>
            <a className="share_twitter-btn" href="http://twitter.com/share?text=Estoy realizando este reto en Fundemic, te apuntas al cambio?&hashtags=fundemicmola,consolemio&user_mentions=GirlsinTechEs" target="_blank">Compartir en twitter</a>
        </section>
    );
};

export default ShareTwitter;