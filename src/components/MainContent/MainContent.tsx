import React from 'react';
import { Button } from "../common/Button/Button";
import s from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={s.mainBlock}>
            <h1 className={s.title}>Профессиональный массаж</h1>
            <h2 className={s.description}>Барановичи</h2>
            <Button title='Записаться!'/>
        </div>
    );
};

export default MainContent;
