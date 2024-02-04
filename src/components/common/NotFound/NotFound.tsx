import React from 'react';
import s from './NotFound.module.css';
import {PiSmileySadLight} from "react-icons/pi";
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={s.notFoundWrapper}>
            <div className={s.notFoundBlock}>
                <div>
                    <img src="/mainLogoApp.png" alt="logo" className={s.logo}/>
                </div>
                <h2>404</h2>
                <h1>Что-то пошло не так<PiSmileySadLight/></h1>
                <p>
                    Мы не можем найти страницу, которую вы ищете. Вы можете вернуться на главную страницу.
                </p>
                <NavLink to='/' className={s.link}>
                    Вернуться на главную
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;