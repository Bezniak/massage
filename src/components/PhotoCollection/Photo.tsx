import React, {FC} from 'react';
import s from "./Photo.module.css";


interface PropTypes {
    url: string
}

export const Photo: FC<PropTypes> = ({url}) => {
    return (
        <div className={s.photoItem}>
            <img src={url} alt={url} className={s.photo}/>
        </div>
    );
};
