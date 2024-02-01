import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "../common/Button/Button";

const Header = (props: any) => {


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClass = `${s.headerWrapper} ${scrolled ? s.scrolled : ''}`;

    return (
        <nav className={headerClass}>
            <ul className={s.headerBlock}>
                <li>
                    <NavLink to='/'>
                        <img className={s.logo} src="/logo.svg" alt="logo"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/main'
                             className={({isActive}) => (isActive ? s.active : s.normal)}>Главная</NavLink>
                </li>
                <li>
                    <NavLink to='/aboutUs'
                             className={({isActive}) => (isActive ? s.active : s.normal)}>О нас</NavLink>
                </li>
                <li>
                    <NavLink to='/services'
                             className={({isActive}) => (isActive ? s.active : s.normal)}>Услуги</NavLink>
                </li>
                <li>
                    <NavLink to='/specials'
                             className={({isActive}) => (isActive ? s.active : s.normal)}>Специальные
                        предложения</NavLink>
                </li>
                <Button title='Записаться!' scrolled={scrolled}/>
            </ul>
        </nav>
    );
};


export default Header;