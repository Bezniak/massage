import React, {FC} from 'react';
import {useParams} from 'react-router-dom';
import {MassageInfo} from "../../data/data";
import MassageTypeDescription from "../MassageTypeDescription/MassageTypeDescription";
import NotFound from "../common/NotFound/NotFound";


interface DynamicMassageTypeDescriptionProps {
    massageTypeDescription: {
        [key: string]: MassageInfo;
    };
}

const DynamicMassageTypeDescription: FC<DynamicMassageTypeDescriptionProps> = ({massageTypeDescription}) => {

    const {massageType} = useParams();

    console.log('massageType:', massageType);
    console.log('massageTypeDescription keys:', Object.keys(massageTypeDescription));

    const selectedMassageType = massageTypeDescription[massageType || 'default'];

    if (!selectedMassageType) {
        return <NotFound/>;
    }

    return (
        <div>
            <MassageTypeDescription {...selectedMassageType} />
        </div>
    );
};

export default DynamicMassageTypeDescription;