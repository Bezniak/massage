import React, {FC} from 'react';
import s from './TypeMassage.module.css';
import {FaArrowRightLong} from "react-icons/fa6";


type PropsType = {
    title: string
    description: string
    image: string
}
export const TypeMassage: FC<PropsType> = ({description, title, image}) => {
    return (
        <div className={s.typeWrapper}>
            <img className={s.typeImg} src={image} alt={title}/>
            <h3 className={s.typeTitle}>{title}</h3>
            <p className={s.typeDescription}>{description}</p>

            <div className={s.buttonBlock}>
                <button className={s.typeButton}>Узнать больше</button>
                <FaArrowRightLong className={s.arrowIcon}/>
            </div>

        </div>
    );
};