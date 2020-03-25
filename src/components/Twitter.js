import React, { Component } from 'react';
import '../App.css';

const Twitter = (props) => {
    

    return (
        <div>
            <a id="tweet-quote" 
               href={"https://twitter.com/intent/tweet?hashtags=" + props.author + "&text=" + props.quote} target="_blank">
                <i className="fa fa-twitter btn btn-secondary" style={{ backgroundColor: props.colour }}>Tweet</i>
            </a>
        </div>
    );
}

export default Twitter;