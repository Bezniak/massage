import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Button} from '../common/Button/Button';
import HoverHeader from './HoverHeader/HoverHeader';
import {IoChevronDownSharp} from 'react-icons/io5';

const Header = (props: any) => {

    const [scrolled, setScrolled] = useState(false);
    const [isBlockVisible, setIsBlockVisible] = useState(false);
    const [contentBlock, setContentBlock] = useState('');


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


    const onMoseEnter = (blockInfo: string) => {
        setIsBlockVisible(true)
        setContentBlock(blockInfo)
    }

    const onMouseLeave = () => {
        setIsBlockVisible(false)
        setContentBlock('')
    }

    const onContentBlockClick = () => {
        setIsBlockVisible(false)
    }


    const headerClass = `${s.headerWrapper} ${scrolled ? s.scrolled : ''}`;


    return (
        <nav className={headerClass}>
            <ul className={s.headerBlock} >
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


                <li className={s.active ? s.normal : ''} onMouseEnter={() => onMoseEnter('about')}>
                    О нас <IoChevronDownSharp className={s.icon}/>
                </li>
                {isBlockVisible && contentBlock === 'about' && (
                    <div className={s.hoverWrapper} onMouseLeave={onMouseLeave} onClick={onContentBlockClick}>
                        <HoverHeader
                            items={[
                                {title: 'Наш салон', path: '/ourSalon'},
                                {title: 'Местоположение', path: '/location'},
                                {title: 'F.A.Q.', path: '/faq'},
                            ]}
                        />
                    </div>
                )}


                <li className={s.active ? s.normal : ''} onMouseEnter={() => onMoseEnter('services')}>
                    Услуги <IoChevronDownSharp className={s.icon}/>
                </li>
                {isBlockVisible && contentBlock === 'services' && (
                    <div className={s.hoverWrapper} onMouseLeave={onMouseLeave} onClick={onContentBlockClick}>
                        <HoverHeader
                            items={[
                                {title: 'Виды оказываемого массажа', path: '/massageTypes'},
                                {title: 'Цены', path: '/prices'},
                            ]}
                        />
                    </div>
                )}


                <li className={s.active ? s.normal : ''} onMouseEnter={() => onMoseEnter('specialties')}>
                    Специальные предложения <IoChevronDownSharp className={s.icon}/>
                </li>
                {isBlockVisible && contentBlock === 'specialties' && (
                    <div className={s.hoverWrapper} onMouseLeave={onMouseLeave} onClick={onContentBlockClick}>
                        <HoverHeader
                            items={[
                                {title: 'Сертификаты', path: '/certificates'},
                                {title: 'Абонементы', path: '/subscription '},
                            ]}
                        />
                    </div>
                )}

                <Button title='Записаться!' scrolled={scrolled}/>
            </ul>
        </nav>
    );
};

export default Header;
