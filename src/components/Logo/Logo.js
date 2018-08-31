import React from 'react';
import { Header } from 'semantic-ui-react';
import './Logo.css';

export default (props) => (
    <div className="logo" {...props}>
        <Header as="h1" className="logo__header"><a href="#topPart">{props.text}</a></Header>
    </div>
);