import React, { FC } from 'react';
import s from './WelcomeSection.module.css';

interface WelcomeSectionProps {
    title: string;
    description: string;
}

export const WelcomeSection: FC<WelcomeSectionProps> = ({ title, description }) => {
    return (
        <div className={s.welcomeWrapper}>
            <div className={s.welcomeBlock}>
                <img src="/mainLogoApp.png" alt="logo" className={s.welcomeImg}/>
                <h2 className={s.welcomeTitle}>{title}</h2>
                <p className={s.welcomeDescription}>{description}</p>
            </div>
        </div>
    );
};
