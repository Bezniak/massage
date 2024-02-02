import React, {FC} from 'react';
import s from './MassageTypeDescription.module.css';

interface MassageProps {
    id: string;
    imageBG: string;
    title: string;
    description: string;
    benefits: string[];
    stages: string[];
    contraindications: string[];
    conclusion: string;
    photoUrl: string[];
}

const MassageTypeDescription: FC<MassageProps> = ({
                                                      title,
                                                      imageBG,
                                                      description,
                                                      benefits,
                                                      stages,
                                                      contraindications,
                                                      conclusion,
                                                      photoUrl
                                                  }) => {
    return (
        <div className={s.lala} style={{backgroundImage: `url(${imageBG})`, backgroundSize: 'cover'}}>
            <h1>{title}</h1>
            <p>{description}</p>

            <div>
                <h2>Преимущества:</h2>
                <ul>
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Этапы сеанса:</h2>
                <ol>
                    {stages.map((stage, index) => (
                        <li key={index}>{stage}</li>
                    ))}
                </ol>
            </div>

            <div>
                <h2>Противопоказания:</h2>
                <ul>
                    {contraindications.map((contraindication, index) => (
                        <li key={index}>{contraindication}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Фотографии:</h2>
                {photoUrl.map((url, index) => (
                    <img className={s.img} key={index} src={url} alt={`Massage session ${index + 1}`}/>
                ))}
            </div>

            <p>{conclusion}</p>
        </div>
    );
};

export default MassageTypeDescription;
