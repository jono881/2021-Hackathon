import React from 'react';
import './Navigation.css' 
import { FaHome, FaCamera, FaBook} from 'react-icons/fa';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className='navbar center'>
          <NavLink to="/home"><FaHome size="50"/></NavLink>
          <NavLink to="/detect"><FaCamera size="50"/></NavLink>
          <NavLink to="/flashcards"><FaBook size="50"/></NavLink>
       </div>
    );
}
 
export default Navigation;