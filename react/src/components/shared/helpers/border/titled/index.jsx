import React from 'react';
import Bordered from '..';

import './index.scss';

const TitledBorder = ({ title, children, ...rest }) => (
    <Bordered className="titled-border" {...rest}>
        <span className="titled-border__title text text-md text-bold">{title}</span>
        {children}
    </Bordered>
);

export default TitledBorder;
