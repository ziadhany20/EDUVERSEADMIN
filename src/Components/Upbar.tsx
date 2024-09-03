import React from "react";
import './Upbar.css';
export default function Up (){
    return(
    <header className= "header">
        <a href="/" className="logo">
            Logo
        </a>
        <nav className="upbar">
        <a href="/" > Home </a>
        <a href="/" > Streaming </a>
        <a href="/" > Analatics </a>

        </nav>
    </header>
    )
}