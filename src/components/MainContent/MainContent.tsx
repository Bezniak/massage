import React from 'react';
import s from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.overlay}></div>
            <h1 className={s.title}>Профессиональный массаж</h1>
            <h2 className={s.description}>Барановичи</h2>
        </div>
    );
};

export default MainContent;
