import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

// Style
import './CustomAccordion.css';

export default class CustomAccordion extends Component {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e, titleProps) {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };

    render() {
        const { activeIndex } = this.state;
        const { items } = this.props;
        const itemsEl = items.map((item) => (
            <div key={item.index}>
                <Accordion.Title active={activeIndex === item.index} index={item.index} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    {item.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === item.index}>
                    {item.content}
                </Accordion.Content>
            </div>
        ));

        return (
            <Accordion className="custom-accordion" exclusive={false}>
                {itemsEl}
            </Accordion>
        )
    }
}