import React, { Component } from 'react';
import '../App.css';

const Button = ({ onClick, colour }) => {
    return (
        <div>
            <button id="new-quote" className="btn btn-secondary" style={{ backgroundColor: colour }} onClick={onClick}>New Quote</button>
        </div>
    );
}

export default Button;