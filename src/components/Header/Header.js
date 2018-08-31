import React from 'react';
import Logo from 'components/Logo/Logo';
import Phone from 'components/Phone/Phone';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import { Grid, Container } from 'semantic-ui-react';
import './Header.css';

export default (props) => {
    const { className, ...otherProps } = props;

    return (
        <div className={'header-part ' + className} {...otherProps}>
            <Container className="header-part__content">
                <Grid>
                    <Grid.Row className="header-part__contacts">
                        <Grid.Column mobile={16} width={4} largeScreen={4} widescreen={4} >
                            <Logo className="header-part__logo"
                                  text="Посадский кровельщик"/>
                        </Grid.Column>
                        <Grid.Column mobile={16} width={12} largeScreen={12} widescreen={12}
                                     textAlign="right"
                                     verticalAlign="top">
                            <Phone className="header-part__phone"
                                   number="8 985 780-00-78"
                                   label="Позвоните нам:"/>
                            <SocialLinks/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};
