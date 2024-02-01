import React from 'react';
import s from './ConclusionSection.module.css';
import {Button} from "../common/Button/Button";

interface ConclusionSectionProps {
    title: string;
    description: string;
}

const ConclusionSection: React.FC<ConclusionSectionProps> = ({title, description}) => {
    return (
        <div className={s.conclusionWrapper}>
            <div className={s.conclusionSection}>
                <h2 className={s.conclusionTitle}>{title}</h2>
                <p className={s.conclusionDescription}>{description}</p>
                <Button title='Записаться на массаж!' color={'#43484e'}/>
            </div>
        </div>
    );
};

export default ConclusionSection;
