import React from 'react';
import './Phone.css';

export default (props) => (
    <div className="phone" {...props}>
        <span className="phone__label">{props.label}</span>
        <a className="phone__number"
           href={'tel:' + props.number} >{props.number}</a>
    </div>
);