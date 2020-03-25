import React, { Component } from 'react';
import '../App.css';

const Quotes = (props) => {
    return (
        <div>
            <div id="text" className="row">
                <div className="col-md-1">
                    <i className="fa fa-quote-left" style={{ color: props.colour }}></i>
                </div>
                <div className="col">
                    <span className="quote m-2" style={{ color: props.colour }}>{props.quote}</span>
                </div>
            </div>
            <div id="author" className="mt-2 text-right">
                <span className="font-italic" style={{ color: props.colour }}>- {props.author}</span>
            </div>
        </div>
    );
}

export default Quotes;