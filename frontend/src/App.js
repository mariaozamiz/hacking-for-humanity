import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ChallengesList from './components/challengesList/ChallengesList';
import ChallengeDetail from './components/challengeDetail/ChallengeDetail';
import airtableApi from './services/airtableClient';
import Landing from './components/landing/Landing';
import './app.scss';
import AcceptedChallenges from './components/acceptedChallenges/AcceptedChallenges';

function App() {
  const [challenges, setChallenges] = useState([]);
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);
  

  useEffect(() => {
    airtableApi().then((data) => {
      setChallenges(data);
    });
    getCovidImpact().then((data) => {
      console.log('Incidencia acumulada 14 días:', data.ia14d)
  });
  }, []);


  const handleAcceptedChallenges = (data) => {
    setAcceptedChallenges([...acceptedChallenges, (challenges.find((challenge) => challenge.id === data))]);
  };

  
  const renderChallengeDetail = (props) => {
    const challengeId = props.match.params.id;
    const foundChallenge = challenges.find((challenge) => {
      return challenge.id === challengeId;
    });
    if (foundChallenge !== undefined) {
      return <ChallengeDetail challenge={foundChallenge} handleAcceptedChallenges={handleAcceptedChallenges} acceptedChallenges={acceptedChallenges}/>;
    }
  };

  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/App">
        <Header />
        <main className="main">
          <ChallengesList challenges={challenges} />
        </main>
      </Route>
      <Route exact path="/AcceptedChallenges">
        <Header />
        <main className="main">
          <AcceptedChallenges acceptedChallenges={acceptedChallenges} />
        </main>
      </Route>
      <Switch>
        <Route exact path="/challenge/:id" render={renderChallengeDetail} />
      </Switch>
    </div>
  );
}

export default App;
