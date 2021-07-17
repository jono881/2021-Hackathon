import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Detect from './pages/Detect/Detect';
import Navigation from './components/Navigation/Navigation';
import Definition from './pages/Definition/Definition';
import FlashCard from './pages/FlashCard/FlashCard';
import FlashCardList from './pages/FlashcardList/FlashCards';
import Intro from './pages/Intro/Intro';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
            <Switch>
              <Route path="/" component={Intro} exact/>
              <div>
                <Route path="/home" component={Home}/>
                <Route path="/detect" component={Detect}/>
                <Route path="/flashcards" component={FlashCardList}/>
                <Route path="/card" component={FlashCard}/>
                <Route path="/definition" component={Definition}/>
                <Route path="/search" component={Search}/>
                <Navigation />
              </div>
           </Switch>
    </BrowserRouter>
  );
}

export default App;
