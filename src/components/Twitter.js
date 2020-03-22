import React, { Component } from 'react';
import '../App.css';

const Twitter = ({ quote, author, colour }) => {
    return (
        <div>
            <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags="+author+"&text="+quote} target="_blank">
                <i className="fa fa-twitter btn btn-secondary" style={{ backgroundColor: colour }}>Tweet</i>
            </a>
        </div>
    );
}

export default Twitter;