// Header.tsx
import React, {useEffect, useRef, useState} from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Button} from '../common/Button/Button';
import HoverHeader from './HoverHeader/HoverHeader';
import {IoChevronDownSharp} from 'react-icons/io5';

const Header = (props: any) => {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState('');
    const [isHoverWrapperVisible, setIsHoverWrapperVisible] = useState(false);


    const onMoseEnter = (menu: string) => {
        setHoveredMenu(menu);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setIsHoverWrapperVisible(true);
        }, 0); // Set your desired delay in milliseconds
    };

    const onMouseLeave = () => {
        clearTimeout(timeoutId);
        setHoveredMenu('');
        timeoutId = setTimeout(() => {
            setIsHoverWrapperVisible(false);
        }, 100); // Set your desired delay in milliseconds
    };

    let timeoutId: any;

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId);
        };
    }, [timeoutId]);

    const onClickInsideWrapper = () => {
        setIsHoverWrapperVisible(false);
    };

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
                        <img className={s.logo} src='/mainLogoApp.png' alt='logo'/>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/' className={({isActive}) => (isActive ? s.active : s.normal)}>
                        Главная
                    </NavLink>
                </li>


                <div
                    className={s.liBlock}
                    onMouseEnter={() => onMoseEnter('about')}
                    onMouseLeave={onMouseLeave}
                >
                    <li className={hoveredMenu === 'about' ? s.active + ' ' + s.normal : s.normal}>
                        О нас <IoChevronDownSharp className={s.icon}/>
                        {isHoverWrapperVisible && hoveredMenu === 'about' && (
                            <div className={s.hoverWrapper} onClick={onClickInsideWrapper}>
                                <HoverHeader
                                    items={[
                                        {title: 'Наш салон', path: '/ourSalon'},
                                        {title: 'Местоположение', path: '/location'},
                                        {title: 'F.A.Q.', path: '/faq'},
                                    ]}
                                />
                            </div>
                        )}
                    </li>
                </div>


                <div className={s.liBlock}
                     onMouseEnter={() => onMoseEnter('services')}
                     onMouseLeave={onMouseLeave}>
                    <li

                        className={hoveredMenu === 'services' ? s.active + ' ' + s.normal : s.normal}
                    >
                        Услуги <IoChevronDownSharp className={s.icon}/>
                        {isHoverWrapperVisible && hoveredMenu === 'services' && (
                            <div className={s.hoverWrapper} onClick={onClickInsideWrapper}>
                                <HoverHeader
                                    items={[
                                        {title: 'Виды оказываемого массажа', path: '/massageTypes'},
                                        {title: 'Цены', path: '/prices'},
                                    ]}
                                />
                            </div>
                        )}
                    </li>
                </div>

                <div className={s.liBlock}
                     onMouseEnter={() => onMoseEnter('specials')}
                     onMouseLeave={onMouseLeave}>
                    <li

                        className={hoveredMenu === 'specials' ? s.active + ' ' + s.normal : s.normal}
                    >
                        Специальные предложения <IoChevronDownSharp className={s.icon}/>
                        {isHoverWrapperVisible && hoveredMenu === 'specials' && (
                            <div className={s.hoverWrapper} onClick={onClickInsideWrapper}>
                                <HoverHeader
                                    items={[
                                        {title: 'Сертификаты', path: '/certificates'},
                                        {title: 'Абонементы', path: '/subscription '},
                                    ]}
                                />
                            </div>
                        )}
                    </li>
                </div>

                <Button title='Записаться!' scrolled={scrolled}/>
            </ul>
        </nav>
    );
};

export default Header;
