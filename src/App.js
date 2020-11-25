import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import CategoriesList from './components/categoriesList/CategoriesList';
import DayChallenge from './components/dayChallenge/DayChallenge';
import ChallengeDetail from './components/challengeDetail/ChallengeDetail';
import airtableApi from './services/airtableClient';

import './app.scss';

function App() {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        airtableApi().then((data) => {
            setChallenges(data);
        });
    }, []);

    const renderChallengeDetail = (props) => {
        const challengeId = props.match.params.id;
        const foundChallenge = challenges.find((challenge) => {
            return challenge.id === parseInt(challengeId);
        });
        if (foundChallenge !== undefined) {
            return <ChallengeDetail challenge={foundChallenge} />;
        }
    };

    return (
        <div className="App">
            <Header />
            <main className="main">
                <h2>Reto del día</h2>
                <DayChallenge />
                <h2>Retos por categoría</h2>
                <CategoriesList challenges={challenges} />
                <Switch>
                    <Route
                        exact
                        path="/challenges/:id"
                        render={renderChallengeDetail}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;
