import React from 'react';
import { Button } from 'semantic-ui-react';
import Scrollchor from 'react-scrollchor';
import './Presentation.css';

export default (props) => {
    const presentationInfo = props.presentationInfo;
    return (
        <div className="presentation">
            <div className="presentation__general-text">{presentationInfo.generalText}</div>
            <div className="presentation__main-text">{presentationInfo.mainText}</div>
            <Button className="presentation__button"
                    color='yellow'>
                <Scrollchor className={`nav__item`}
                            to='#servicesPart'>
                    {String(presentationInfo.buttonText)}
                </Scrollchor>
            </Button>
        </div>
    );
}