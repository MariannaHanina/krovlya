import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import HeaderPart from './components/Header/Header';
import NavPart from './components/Nav/Nav';
import PresentationPart from './components/Presentation/Presentation';
import SincePart from './components/Since/Since';
import MainPart from './components/Main/Main';
import ServicesPart from "./components/ServicesList/ServicesList";
import PortfolioPart from "./components/Portfolio/Portfolio";
import AdsPart from "./components/Ads/Ads";
import ContactsPart from "./components/Contacts/Contacts";
import FooterPart from "./components/Footer/Footer";

// Data
import navItemsData from './data/navItems';
import presentationData from './data/presentationInfo';
import servicesData from './data/services';
import portfolioData from './data/portfolio';

// Style
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {headerStickyTop : false};
    }
    componentDidMount() {
        window.addEventListener('scroll', this.checkScrollState.bind(this, window));
    }
    checkScrollState (window) {
        console.log(window.scrollY);
        if(window.scrollY >= 413) this.setState({headerStickyTop : true});
        else this.setState({headerStickyTop : false});
    }

    isStickyTop () {
        return this.state.headerStickyTop ? 'App__top App__top_sticky' : 'App__top';
    }

    render() {
        return (
            <div className="App">
                <div className={this.isStickyTop()}>
                    <HeaderPart className="App__header-part"/>
                    <NavPart navItems={navItemsData}/>
                </div>
                <Container className="App__presentation-info">
                    <PresentationPart presentationInfo={presentationData}/>
                </Container>
                <SincePart/>
                <MainPart id={'mainPart'}/>
                <ServicesPart id={'servicesPart'}
                              title="Услуги"
                              services={servicesData}/>
                <PortfolioPart id={'portfolioPart'}
                               title="Портфолио"
                               portfolioData={portfolioData}/>
                <AdsPart title="Вас может заинтересовать:"/>
                <ContactsPart id={'contactsPart'}
                              title="Контакты"/>
            </div>
        );
    }
}

export default App;
