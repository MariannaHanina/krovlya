import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';

// Style
import './Nav.css';

export default class Nav extends Component{
    constructor(props) {
        super(props);

        this.state = { activeItem: 'home' };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, { id, href }) {
        this.setState({ activeItem: id});
    }

    render() {
        const { activeItem } = this.state;

        const items = this.props.navItems;
        const itemsList = items.map((item) => {
            const toAnchor = `#${item.href}`;
            const activeClass = activeItem === item.id ? 'active' : '';
            return (
                <Scrollchor className={`nav__item ${activeClass}`}
                            to={toAnchor}
                            key={item.id}
                            id={item.id}
                            onClick={this.handleItemClick}>
                    {item.text}
                </Scrollchor>
            )
        });

        return (
            <Container className="nav" textAlign="right">
                <Menu className="nav__menu"
                      floated="right"
                      borderless={true}>
                    {itemsList}
                </Menu>
            </Container>
        );
    }
}
