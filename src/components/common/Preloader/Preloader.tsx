import React, {FC} from 'react';
import s from './Preloader.module.css'

interface PropsType {
}

export const Preloader: FC<PropsType> = () => {
    return (
        <div className={s.preloaderBlock}>
            <img src="/preloader.svg" alt="preloader"/>
        </div>
    );
};