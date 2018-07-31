import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    VKShareButton,
    OKShareButton,
    EmailShareButton
} from 'react-share';

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
            <List.Item className="social-links__item"
                       key='vk'>
                <VKShareButton className="social-links__link"
                               url="krovlyasp.ru">
                    <Icon name="vk"/>
                </VKShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='fb'>
                <FacebookShareButton className="social-links__link"
                                     url="krovlyasp.ru">
                    <Icon name="facebook"/>
                </FacebookShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='ok'>
                <OKShareButton className="social-links__link"
                                     url="krovlyasp.ru">
                    <Icon name="odnoklassniki"/>
                </OKShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='whatsapp'>
                <WhatsappShareButton className="social-links__link"
                               url="krovlyasp.ru">
                    <Icon name="whatsapp"/>
                </WhatsappShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='email'>
                <EmailShareButton className="social-links__link"
                                  url="krovlyasp.ru">
                    <a href="mailto: 89857800078@yadex.ru">
                        <Icon name="mail"/>
                    </a>
                </EmailShareButton>
            </List.Item>
        </List>
    )
};