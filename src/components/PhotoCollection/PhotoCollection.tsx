import React, {FC} from 'react';
import s from './PhotoCollction.module.css';
import {Photo} from "./Photo";

interface photoCollectionType {
    id: number
    url: string
}

interface PropsType {
    photoCollection: photoCollectionType[]
}

export const PhotoCollection: FC<PropsType> = ({photoCollection}) => {
    return (
        <div className={s.photoWrapper}>
            <h2 className={s.photoTitle}>Подробный взгляд на мир массажа в нашей фотогалерее</h2>
            <div className={s.mainBlock}>
                {photoCollection.map((photo) => (
                    <Photo url={photo.url} key={photo.id}/>
                ))}
            </div>
        </div>
    );
};