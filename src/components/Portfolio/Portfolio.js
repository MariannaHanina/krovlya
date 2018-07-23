import React from 'react';
import { Header, Image, Container } from 'semantic-ui-react';

// Style
import './Portfolio.css';

export default (props) => {
    const {title, images, ...otherProps} = props;
    const imagesEl = images.map((img) => (
        <Image key={String(img)}
               src={img}
               wrapped={true}/>
    ));


    return (
        <div className="portfolio">
            <Container {...otherProps}>
                <Header as="h2" className="portfolio__title">{title}</Header>
            </Container>
            <Container textAlign="center">
                <Image.Group className="portfolio__images"
                             size="medium">
                    {imagesEl}
                </Image.Group>
            </Container>
        </div>
    );
}