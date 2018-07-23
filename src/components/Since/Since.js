import React from 'react';
import { Container, Button, Grid } from 'semantic-ui-react';
import './Since.css';

export default () => (
    <div className="since">
        <Container>
            <Grid verticalAlign="middle">
                <Grid.Column width={8} className="since__text">Мы занимаемся кровлями и фасадами с 2012г.</Grid.Column>
                <Grid.Column width={8} className="since__button-container"><Button className="since__button">Свяжитесь с нами</Button></Grid.Column>
            </Grid>
        </Container>
    </div>
);