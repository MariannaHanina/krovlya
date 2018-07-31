import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header, Container, Icon, Accordion } from 'semantic-ui-react';
import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';
import CustomAccordion from 'components/CustomAccordion/CustomAccordion';

// Style
import './Portfolio.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
    }

    render() {
        const {title, id, portfolioData, ...otherProps} = this.props;
        const portfolioDataWithContent = portfolioData.map((item) => {
            item.images = item.images.map(item => ({
                original: item.thumbnail,
                thumbnail: item.thumbnail,
                sizes: {width: 'auto', height: '150px'}
            }));

            item.content = (
                <Container className="portfolio__gallery"
                           textAlign="center">
                    <ImageGallery items={item.images}/>
                    {/*<Gallery images={item.images} id="gallary{item.index}"/>*/}
                </Container>
            );

            return item;
        });

        return (
            <div className="portfolio" id={id}>
                <Container {...otherProps}>
                    <Header as="h2" className="portfolio__title">{title}</Header>
                </Container>
                <Container className="portfolio__accordion">
                    <CustomAccordion items={portfolioDataWithContent}/>
                </Container>
            </div>
        );
    }
}