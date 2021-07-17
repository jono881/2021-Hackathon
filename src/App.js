import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Detect from './pages/Detect/Detect';
import FlashCards from './pages/Flashcards/FlashCards';
import Navigation from './components/Navigation/Navigation';
import Definition from './pages/Definition/Definition';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/detect" component={Detect}/>
             <Route path="/flashcards" component={FlashCards}/>
             <Route path="/definition" component={Definition}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
