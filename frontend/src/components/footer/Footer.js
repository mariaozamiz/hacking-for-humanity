import React from 'react';
import './footer.scss';

function Footer() {
   
        return ( 
            <ChallengeCard
                key={challenge.id}
                id={challenge.id}
                type={challenge.type}
                image={challenge.image}
                name={challenge.name}
                description={challenge.description}
            />     
        );
    });
    return <ul className="challenge-list">{challengesInfo}</ul>;
};

export default ChallengesList;
