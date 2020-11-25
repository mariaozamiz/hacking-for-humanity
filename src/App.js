import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ChallengesList from './components/challengesList/ChallengesList';
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
        console.log(challenges);
        const foundChallenge = challenges.find((challenge) => {
            return challenge.id === challengeId;
        });
        if (foundChallenge !== undefined) {
            return <ChallengeDetail challenge={foundChallenge} />;
        }
    };

    return (
        <div className="App">
            <Route exact path="/">
                <Header />
                <main className="main">
                    <h2>Reto del día</h2>
                    <DayChallenge />
                    <h2>Retos por categoría</h2>
                    <ChallengesList challenges={challenges} />
                </main>
            </Route>
            <Switch>
                <Route
                    exact
                    path="/challenge/:id"
                    render={renderChallengeDetail}
                />
            </Switch>
        </div>
    );
}

export default App;
