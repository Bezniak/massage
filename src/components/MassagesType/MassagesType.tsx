import React, {FC} from 'react';
import s from './MassagesType.module.css';
import {TypeMassage} from "./TypeMassage";


interface MassageData {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface MassagesTypeProps {
    massageData: MassageData[];
}

export const MassagesType: FC<MassagesTypeProps> = ({massageData}) => {
    return (
        <div className={s.typeWrapper}>
            <div className={s.typeBlock}>
                {massageData.map((massage) => (
                    <TypeMassage title={massage.title} description={massage.description} image={massage.image}
                                 key={massage.id}/>
                ))}
            </div>
        </div>
    );
};