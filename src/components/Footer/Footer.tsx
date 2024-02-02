import React, {FC} from 'react';
import s from './Footer.module.css';
import {FaFacebook, FaSquareInstagram} from "react-icons/fa6";
import {FaLinkedin, FaTiktok} from "react-icons/fa";
import {NavLink} from "react-router-dom";


interface FooterProps {

}

export const Footer: FC<FooterProps> = () => {

    const currentYear = new Date().getFullYear()

    return (
        <div className={s.footerWrapper}>
            <div className={s.footerBlock}>
                <div className={s.footerLogoInfo}>
                    <div className={s.logoWrapper}>
                        <div className={s.logoBlock}>
                            <img src="/logo.svg" alt="logo"/>
                            <h2>Art-Massage</h2>
                        </div>
                        <div className={s.logoContacts}>
                            <p>г. Барановичи, Брестска область, Беларусь</p>
                            <p>Телефон: <a href="tel:+375256775268" className={s.footerLink}> +375 (25) 677-52-68</a>
                            </p>
                            <p>Email: <a href="mailto:info@example.com" className={s.footerLink}>info@example.com</a>
                            </p>
                        </div>

                        <div>
                            <ul className={s.linksBlock}>
                                <li>
                                    <a
                                        href="https://www.facebook.com/friends/?profile_id=100059235169418&notif_id=1706252818008423&notif_t=friend_confirmed&ref=notif"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={s.footerLink}
                                    >
                                        <FaFacebook className={s.linkSVG}/>
                                    </a>
                                </li>
                                <li><a href="https://www.instagram.com/natali.massage_baranovichi/"
                                       rel="noreferrer"
                                       target="_blank"
                                       className={s.footerLink}
                                >
                                    <FaSquareInstagram className={s.linkSVG}/>
                                </a>
                                </li>
                                <li><a
                                    href="https://www.linkedin.com/in/%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BD%D0%B0-78baa82b0/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className={s.footerLink}
                                >
                                    <FaLinkedin className={s.linkSVG}/>
                                </a>
                                </li>
                                <li><a
                                    href="https://www.tiktok.com/@user9292678663370"
                                    rel="noreferrer"
                                    target="_blank"
                                    className={s.footerLink}
                                >
                                    <FaTiktok className={s.linkSVG}/>
                                </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


                <div className={s.footerInfoWrapper}>
                    <ul className={s.footerInfoBlock}>
                        <li className={s.footerInfoTitle}>Виды оказываемого массажа</li>
                        <li>
                            <NavLink to='/classicBodyMassage'>Классический массаж тела</NavLink>
                        </li>
                        <li>
                            <NavLink to='/backMassage'>Массаж спины</NavLink>
                        </li>
                        <li>
                            <NavLink to='/massageOfTheCervicalCollarArea'>Массаж шейно-воротниковой зоны</NavLink>
                        </li>
                        <li>
                            <NavLink to='/footMassage'>Массаж ног</NavLink>
                        </li>
                        <li>
                            <NavLink to='/handMassage'>Массаж рук</NavLink>
                        </li>
                        <li>
                            <NavLink to='/honeyMassage'>Медовый массаж</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cuppingMassage'>Баночный массаж</NavLink>
                        </li>
                        <li>
                            <NavLink to='/faceMassage'>Массаж лица</NavLink>
                        </li>
                        <li>
                            <NavLink to='/relaxingMassage'>Расслабляющий массаж</NavLink>
                        </li>
                    </ul>


                    <ul className={s.footerInfoBlock}>
                        <li className={s.footerInfoTitle}>Наш салон</li>
                        <li>
                            <NavLink to='/aboutUs'>О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to='/experts'>Эксперты</NavLink>
                        </li>
                        <li>
                            <NavLink to='/pricing'>Цены</NavLink>
                        </li>
                    </ul>


                    <ul className={s.footerInfoBlock}>
                        <li className={s.footerInfoTitle}>Контакты</li>
                        <li>
                            <NavLink to='/location'>Местоположение</NavLink>
                        </li>
                        <li>
                            <NavLink to='/helpAndFAQ'>Помощь и часто задаваемые вопросы</NavLink>
                        </li>
                        <li>
                            <NavLink to='/membership'>Сертификаты и абонементы</NavLink>
                        </li>
                        <li>
                            <NavLink to='/reviews'>Отзывы</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <p className={s.copyRight}>© {currentYear} Art-Massage. Все права защищены.</p>
        </div>
    );
};
