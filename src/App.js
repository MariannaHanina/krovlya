import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import HeaderPart from './components/Header/Header';
import NavPart from './components/Nav/Nav';
import PresentationPart from './components/Presentation/Presentation';
import SincePart from './components/Since/Since';
import MainPart from './components/Main/Main';
import ServicesPart from "./components/ServicesList/ServicesList";
import PortfolioPart from "./components/Portfolio/Portfolio";
import ContactsPart from "./components/Contacts/Contacts";

// Data
import navItemsData from './data/navItems';
import presentationData from './data/presentationInfo';
import servicesData from './data/services';
import portfolioData from './data/portfolio';

// Style
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderPart className="App__header-part"/>
                <NavPart navItems={navItemsData}/>
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
                               images={portfolioData}/>
                <ContactsPart id={'contactsPart'}
                              title="Контакты"/>

            </div>
        );
    }
}

export default App;
