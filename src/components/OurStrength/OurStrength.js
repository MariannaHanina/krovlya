import React from 'react';
import { Header } from 'semantic-ui-react';
import './OurStrength.css';

export default (props) => {
    const { className, strengthsList } = props;
    const strengthsListEl = strengthsList.map((item) => (
        <li key={item.id}>{item.text}</li>
    ));

    return (
        <div className={'our-strength ' + className}>
            <Header className="our-strength__title" as="h2">{props.title}</Header>
            <ul className="our-strength__list">{strengthsListEl}</ul>
        </div>
    );
}