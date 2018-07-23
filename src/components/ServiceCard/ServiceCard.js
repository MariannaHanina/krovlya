import React from 'react'
import { Card } from 'semantic-ui-react';

import './ServiceCard.css'

export default (props) => {
    const {price, unit, ...otherProps} = props;
    const extra = (
        <div>от <span className="service-card__price">{price}</span> {unit}</div>
    );

    return (
        <Card className="service-card"
            {...otherProps}
            extra={extra}
        />
    );
}