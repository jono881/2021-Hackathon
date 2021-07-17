import React from 'react'
import { Link } from 'react-router-dom'
import { FaLanguage } from 'react-icons/fa';
export default function Intro() {
    return (
        <div className="intro-container">
            <div className="animate">
                <FaLanguage size="100" className="animation"/>
            </div>
            <h1 className="animate">World's First Mandarin Language Learning App for Dyslexia</h1>
            <div>
                <Link className="btn blue" to={{pathname: "/home"}}>Get Started</Link>
            </div>
        </div>
    )
}
