import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ChallengesList from './components/challengesList/ChallengesList';
import ChallengeDetail from './components/challengeDetail/ChallengeDetail';
import airtableApi from './services/airtableClient';
import getCovidImpact from './services/geolocation';
import Landing from './components/landing/Landing';
import './app.scss';
import AcceptedChallenges from './components/acceptedChallenges/AcceptedChallenges';
import Footer from './components/footer/Footer';

function App() {
  const [challenges, setChallenges] = useState([]);
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);
  const [covidLevel, setCovidLevel] = useState([]);

  useEffect(() => {
    airtableApi().then((data) => {
      setChallenges(data);
    });
    getCovidImpact()
      .then((data) => {
        if (data.ia14d) {
          console.log('Incidencia acumulada 14 días:', data.ia14d);
          if (data.ia14d < 200) {
            setCovidLevel(0)
          } else if (data.ia14d < 400) {
            setCovidLevel(1)
          } else {
            setCovidLevel(2)
          }
        } else if (data.fatality) {
          console.log('Tasa de mortalidad:', data.fatality);
          if (data.fatality < 0.01) {
            setCovidLevel(0)
          } else if (data.fatality < 0.04) {
            setCovidLevel(1)
          } else {
            setCovidLevel(2)
          }
        }
      })
      .catch((error) => {
        console.error('Error retrieving covid data:', error);
        // Aplicar estilo por defecto
      });
  }, []);

  const handleAcceptedChallenges = (data) => {
    setAcceptedChallenges([
      ...acceptedChallenges,
      challenges.find((challenge) => challenge.id === data),
    ]);
  };

  const renderChallengeDetail = (props) => {
    const challengeId = props.match.params.id;
    const foundChallenge = challenges.find((challenge) => {
      return challenge.id === challengeId;
    });
    if (foundChallenge !== undefined) {
      return (
        <ChallengeDetail
          challenge={foundChallenge}
          handleAcceptedChallenges={handleAcceptedChallenges}
          acceptedChallenges={acceptedChallenges}
        />
      );
    }
  };

  return (
    <div className="App">
      <Route exact path="/">
        <Landing level={covidLevel} />
      </Route>
      <Route exact path="/App">
        <Header />
        <main className="main">
          <ChallengesList challenges={challenges} />
        </main>
        <Footer />
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
