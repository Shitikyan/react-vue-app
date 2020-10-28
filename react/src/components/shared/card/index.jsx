import React from 'react';
import { Bordered } from '../helpers';
import './index.scss';

const Card = ({ title, children, className }) => (
    <div className={className ? className + " card" : "card"}>
        <p className="card__title text text-xxs text-bold">{title ? title + ":" : ""}</p>
        <Bordered>
            {children}
        </Bordered>
    </div>
);

export default Card;
