import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import FancyQuizz from "./composants/FancyQuizz";
import Questions from "./composants/Questions";
import Correct from "./composants/Correct";

import NavBar from "./composants/NavBar";

function App() {
  return (
      <Router>
        <h1 className="title__app">Qui<span className="zz">zz</span> 🧐</h1>
        <div className="App">
          <NavBar/>
  
        <Switch>
          <Route path="/fancyquizz" component={FancyQuizz} />

          <Route path="/questions" component={Questions} />

          <Route path="/correct" component={Correct} />
        </Switch>
        </div>
        <p className="copyright">© 2020 Quizz. Tous droits réservés.</p>
      </Router>
  );
}

export default App;
