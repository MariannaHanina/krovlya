import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import './SocialLinks.css';

export default function (props){
    const snetworks = props.snetworks;
    const snetworksList = snetworks.map((item) => (
        <List.Item className="social-links__item"
                   key={item.id}>
            <a className="social-links__link"
               title={item.hint}
               href={item.href}>
                <Icon name={item.icon}/>
            </a>
        </List.Item>
    ));

    return (
        <List className="social-links"
              horizontal>
            {snetworksList}
        </List>
    )
};