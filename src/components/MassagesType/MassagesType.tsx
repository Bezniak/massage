// MassagesType.tsx
import React, { FC } from 'react';
import s from './MassagesType.module.css';
import { Type } from './Type';

interface MassageData {
    id: string;
    image: string;
    title: string;
    description: string;
}

interface MassagesTypeProps {
    massageData: MassageData[];
}

export const MassagesType: FC<MassagesTypeProps> = ({ massageData }) => {
    return (
        <div className={s.typeWrapper}>
            <h2 className={s.typeTitle}>Разнообразие эксклюзивных массажей в нашей студии</h2>
            <div className={s.typeBlock}>
                {massageData.map((massage) => (
                    <Type title={massage.title} description={massage.description} image={massage.image} key={massage.id} />
                ))}
            </div>
        </div>
    );
};
