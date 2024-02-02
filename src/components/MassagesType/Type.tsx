import React, { FC, useState } from 'react';
import s from './Type.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from '../common/Button/Button';
import { Link } from 'react-router-dom';

type PropsType = {
    title: string;
    description: string;
    image: string;
};

export const Type: FC<PropsType> = ({ description, title, image }) => {


    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`${s.typeWrapper} ${isHovered ? s.hovered : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img className={s.typeImg} src={image} alt={title} />
            <h3 className={s.typeTitle}>{title}</h3>
            <p className={s.typeDescription}>{description}</p>

            <div className={s.buttonBlock}>
                <Link to="/massage-description">
                    <button className={s.typeButton}>Узнать больше</button>
                </Link>
                <FaArrowRightLong className={s.arrowIcon} />
            </div>
        </div>
    );
};
