// Button.js

import React, { FC } from 'react';
import s from './Button.module.css';

type PropTypes = {
    title: string;
    scrolled?: boolean; // Add scrolled prop
};

export const Button: FC<PropTypes> = ({ title, scrolled }) => {
    const buttonClassName = `${s.transparentButton} ${scrolled ? s.scrolled : ''}`;

    return <div className={buttonClassName}>{title}</div>;
};
