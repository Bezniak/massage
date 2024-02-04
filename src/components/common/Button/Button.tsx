// Button.js

import React, {FC} from 'react';
import s from './Button.module.css';

type PropTypes = {
    title: string;
    scrolled?: boolean; // Add scrolled prop
    color?: string
    margin?: number
    padding?: number
};

export const Button: FC<PropTypes> = ({title, scrolled, color, margin, padding}) => {
    const buttonClassName = `${s.transparentButton} ${scrolled ? s.scrolled : ''}`;

    return <div className={buttonClassName}
                style={{color: `${color}`, padding: `${padding}`, margin: `${margin}`,}}>{title}</div>;
};
