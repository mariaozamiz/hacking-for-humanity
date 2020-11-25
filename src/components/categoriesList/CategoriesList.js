import React from 'react';
import ChallengesList from '../challengesList/ChallengesList';
import './categoriesList.scss';

function CategoriesList({ challenges }) {
    return (
        <div>
            <ChallengesList challenges={challenges} />
        </div>
    );
}

export default CategoriesList;
