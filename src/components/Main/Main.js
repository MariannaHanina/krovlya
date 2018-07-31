import React from 'react';
import { Container, Grid} from 'semantic-ui-react';
import AboutUs from 'components/AboutUs/AboutUs';
import OurStrength from 'components/OurStrength/OurStrength';
import './Main.css';

// Data
import strengthsList from 'data/strengthsList';
import aboutUsText from 'data/aboutUs';

export default (props) => {
    const {id, ...otherProps} = props;
    return (
        <div className="main" id={id}>
            <Container {...otherProps}>
                <Grid>
                    <Grid.Column width={8}>
                        <AboutUs class="main__about-us"
                                 title="О нас"
                                 text={aboutUsText}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <OurStrength className="main__our-strength"
                                     title="Почему мы"
                                     strengthsList={strengthsList}/>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}