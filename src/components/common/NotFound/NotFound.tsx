import React from 'react';
import s from './NotFound.module.css';
import {PiSmileySadLight} from "react-icons/pi";

const NotFound = () => {
    return (
        <div className={s.notFoundWrapper}>
            <div className={s.notFoundBlock}>
                <h2>404</h2>
                <h1>Страница не найдена <PiSmileySadLight/></h1>

            </div>
        </div>
    );
};

export default NotFound;