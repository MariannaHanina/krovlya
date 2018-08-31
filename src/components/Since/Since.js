import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import './Since.css';

export default () => (
    <div className="since">
        <Container>
            <Grid verticalAlign="middle">
                <Grid.Column mobile={16} width={8} largeScreen={8} widescreen={8} className="since__text">Опыт в мантаже с 2012 года.</Grid.Column>
                <Grid.Column mobile={16} width={8} largeScreen={8} widescreen={8} className="since__button-container">
                    <a className="since__button"
                       href="mailto: 89857800078@yadex.ru">Свяжитесь с нами</a>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
);