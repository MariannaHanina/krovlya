import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import './Ads.css';

export default (props) => {
    const { title } = props;

    return (
        <div className="ads">
            <Container>
                <Header as="h2" className="contacts__title">{title}</Header>
                <div className="ads__site">
                    <iframe src="http://ecostroymsk.ru/" frameBorder="0" width="100%" height="500px"></iframe>
                    {/*<div class="ribbon__wrap">
                        <span class="ribbon">Строительство домов из двойного бруса</span>
                    </div>*/}
                </div>
            </Container>
        </div>
    );
};