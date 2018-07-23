import React from 'react';
import { Header } from 'semantic-ui-react';

export default (props) => (
    <div className="about-us">
        <Header className="about-us__title" as="h2">{props.title}</Header>
        {props.text}
    </div>
);