import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import {
    FacebookShareButton,
    WhatsappShareButton,
    VKShareButton,
    OKShareButton,
    EmailShareButton
} from 'react-share';

import './SocialLinks.css';

export default function (){
    return (
        <List className="social-links"
              horizontal>
            <List.Item className="social-links__item"
                       key='vk'>
                <VKShareButton className="social-links__link"
                               url="http://krovlya.ecostroymsk.ru">
                    <Icon name="vk"/>
                </VKShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='fb'>
                <FacebookShareButton className="social-links__link"
                                     url="http://krovlya.ecostroymsk.ru">
                    <Icon name="facebook"/>
                </FacebookShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='ok'>
                <OKShareButton className="social-links__link"
                                     url="http://krovlya.ecostroymsk.ru">
                    <Icon name="odnoklassniki"/>
                </OKShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='whatsapp'>
                <WhatsappShareButton className="social-links__link"
                               url="http://krovlya.ecostroymsk.ru">
                    <Icon name="whatsapp"/>
                </WhatsappShareButton>
            </List.Item>
            <List.Item className="social-links__item"
                       key='email'>
                <EmailShareButton className="social-links__link"
                                  subject="Посадский кровельщик. Монтаж кровли, сайдинга и сопустствующие работы. Сайт"
                                  body='Ссылка на сайт компании "Посадский кровельщик", которая занимается монтажом кровли, сайдинга и сопустствующими работами: http://krovlya.ecostroymsk.ru'>
                        <Icon name="mail"/>
                </EmailShareButton>
            </List.Item>
        </List>
    )
};