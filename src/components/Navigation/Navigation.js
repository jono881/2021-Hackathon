import React from 'react';
import './Navigation.css' 
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/detect">Detect Image</NavLink>
          <NavLink to="/flashcards">Flash Cards</NavLink>
       </div>
    );
}
 
export default Navigation;