import React from 'react';
import { Card, Header, Container } from 'semantic-ui-react';
import ServiceCard from 'components/ServiceCard/ServiceCard';
import './ServicesList.css';

function ServicesList (props) {
    const {title, services, ...otherProps} = props;
    const servicesList = services.map(item => (<ServiceCard key={item.id} {...item}/>));

    return (
        <div className="services">
            <Container {...otherProps}>
                <Header as="h2">{title}</Header>
            </Container>
            <Card.Group className="services-list" centered>
                {servicesList}
            </Card.Group>
        </div>
    );
}

export default ServicesList;