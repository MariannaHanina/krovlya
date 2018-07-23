import React from 'react';
import Logo from 'components/Logo/Logo';
import Phone from 'components/Phone/Phone';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import { Grid, Container } from 'semantic-ui-react';
import './Header.css';

// Data
import snetworks from 'data/snetworks.js';

export default (props) => {
    const { className, ...otherProps } = props;

    return (
        <div className={'header-part ' + className} {...otherProps}>
            <Container className="header-part__content">
                <Grid>
                    <Grid.Row className="header-part__contacts">
                        <Grid.Column width={4}>
                            <Logo className="header-part__logo"
                                  text="Посадский кровельщик"/>
                        </Grid.Column>
                        <Grid.Column width={12}
                                     textAlign="right">
                            <Phone className="header-part__phone"
                                   number="8 985 780-00-78"
                                   label="Позвоните нам:"/>
                            <SocialLinks snetworks={snetworks}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};
