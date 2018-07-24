import React from 'react';
import { Container, List, Header } from 'semantic-ui-react';

// Style
import './Contacts.css';

export default (props) => {
    const { title } = props;

    return (
        <div className="contacts">
            <Container>
                <Header as="h2" className="contacts__title">{title}</Header>
                <List {...props}>
                    <List.Item icon="mail" content={<a href="mailto:89857800078@yadex.ru">89857800078@yadex.ru</a>}/>
                    <List.Item icon="phone" content={<a href="tel:+7(985)780-00-78">+7 (985) 780-00-78</a>}/>
                    <List.Item content="без выходных с 9:00 до 20:00"/>
                </List>
            </Container>
            {/*<iframe className="contacts__map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Acfbcfaaef06353f9e0c7fb994815ab85eeaa594f9e1bdb463d5695a1863d02e0&amp;source=constructor" width="100%" height="450" frameBorder="0"></iframe>*/}
        </div>
    );
}
