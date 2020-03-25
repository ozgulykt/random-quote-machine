import React, { Component } from 'react';
import '../App.css';

const Button = (props) => {
    return (
        <div>
            <button id="new-quote" 
                    className="btn btn-secondary" 
                    style={{ backgroundColor: props.colour }} 
                    onClick={props.onClick}>New Quote
            </button>
        </div>
    );
}

export default Button;