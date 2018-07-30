import React from 'react';
import { Container, Button, Grid } from 'semantic-ui-react';
import './Since.css';

export default () => (
    <div className="since">
        <Container>
            <Grid verticalAlign="middle">
                <Grid.Column width={8} className="since__text">Мы занимаемся кровлями и фасадами с 2012г.</Grid.Column>
                <Grid.Column width={8} className="since__button-container">
                    <a className="since__button"
                       href="mailto: 89857800078@yadex.ru">Свяжитесь с нами</a>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
);