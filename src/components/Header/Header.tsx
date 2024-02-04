// Header.tsx
import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Button} from '../common/Button/Button';
import HoverHeader from './HoverHeader/HoverHeader';
import {IoChevronDownSharp} from 'react-icons/io5';

const Header = (props: any) => {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState('');

    const [isHoverMenuVisible, setIsHoverMenuVisible] = useState(false);

    const onMoseEnter = (menu: string) => {
        setIsHoverMenuVisible(true);
        setHoveredMenu(menu);
    };

    const onMouseLeave = () => {
        setIsHoverMenuVisible(false);
        setHoveredMenu('');
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

                <div className={s.liBlock}>

                    <li
                        onMouseEnter={() => onMoseEnter('about')}
                        onMouseLeave={onMouseLeave}
                        className={hoveredMenu === 'about' ? s.active + ' ' + s.normal : s.normal}
                    >
                        О нас <IoChevronDownSharp className={s.icon}/>
                        {isHoverMenuVisible && hoveredMenu === 'about' && (
                            <div className={s.hoverWrapper}>
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


                <div className={s.liBlock}>
                    <li
                        onMouseEnter={() => onMoseEnter('services')}
                        onMouseLeave={onMouseLeave}
                        className={hoveredMenu === 'services' ? s.active + ' ' + s.normal : s.normal}
                    >
                        Услуги <IoChevronDownSharp className={s.icon}/>
                        {isHoverMenuVisible && hoveredMenu === 'services' && (
                            <div className={s.hoverWrapper}>
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

                <div className={s.liBlock}>
                    <li
                        onMouseEnter={() => onMoseEnter('specials')}
                        onMouseLeave={onMouseLeave}
                        className={hoveredMenu === 'specials' ? s.active + ' ' + s.normal : s.normal}
                    >
                        Специальные предложения <IoChevronDownSharp className={s.icon}/>
                        {isHoverMenuVisible && hoveredMenu === 'specials' && (
                            <div className={s.hoverWrapper}>
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
