import React from 'react';
import { Container, Grid, Icon, Header } from 'semantic-ui-react';

// Style
import './Contacts.css';

export default (props) => {
    const { title } = props;

    return (
        <div className="contacts">
            <Container>
                <Header as="h2" className="contacts__title">{title}</Header>
                <Grid {...props}>
                    <Grid.Column width="8">
                        <a href="mailto:89857800078@yadex.ru"><Icon name="mail"/> 89857800078@yadex.ru</a>
                    </Grid.Column>
                    <Grid.Column width="8">
                        <a href="tel:+7(985)780-00-78"><Icon name="phone"/> +7 (985) 780-00-78</a> <span className="contacts__calling-time">без выходных с 9:00 до 20:00</span>
                    </Grid.Column>
                </Grid>
            </Container>
            <iframe className="contacts__map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Acfbcfaaef06353f9e0c7fb994815ab85eeaa594f9e1bdb463d5695a1863d02e0&amp;source=constructor" width="100%" height="450" frameBorder="0"></iframe>
            <div className="created-by">
                Created by <a href="mutterdu@mail.ru">MH</a> © 2018
            </div>
        </div>
    );
}
