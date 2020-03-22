import React, { Component } from 'react';
import '../App.css';

const Quotes = ({ quote, author, colour }) => {
    return (
        <div>
            <div id="text" className="row">
                <div className="col-md-1">
                    <i className="fa fa-quote-left" style={{ color: colour }}></i>
                </div>
                <div className="col">
                    <span className="quote m-2" style={{ color: colour }}>{quote}</span>
                </div>
            </div>
            <div id="author" className="mt-2 text-right">
                <span className="font-italic" style={{ color: colour }}>- {author}</span>
            </div>
        </div>
    );
}

export default Quotes;