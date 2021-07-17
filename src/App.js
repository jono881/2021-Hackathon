import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Detect from './pages/Detect/Detect';
import Navigation from './components/Navigation/Navigation';
import Definition from './pages/Definition/Definition';
import FlashCard from './pages/FlashCard/FlashCard';
import FlashCardList from './pages/FlashcardList/FlashCards';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/detect" component={Detect}/>
             <Route path="/flashcards" component={FlashCardList}/>
             <Route path="/card" component={FlashCard}/>
             <Route path="/definition" component={Definition}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
