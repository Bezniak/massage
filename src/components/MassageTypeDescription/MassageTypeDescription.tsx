import React, {FC} from 'react';
import s from './MassageTypeDescription.module.css';

interface MassageProps {
    id: string;
    imageBG: string;
    title: string;
    description: string;
    title_1: string;
    benefits: string[];
    title_2: string;
    stages: string[];
    title_3: string;
    contraindications: string[];
    conclusion: string;
    photoUrl: string[];
}

const MassageTypeDescription: FC<MassageProps> = ({
                                                      title,
                                                      imageBG,
                                                      description,
                                                      title_1,
                                                      benefits,
                                                      title_2,
                                                      stages,
                                                      title_3,
                                                      contraindications,
                                                      conclusion,
                                                      photoUrl
                                                  }) => {
    return (
        <div className={s.lala} style={{backgroundImage: `url(${imageBG})`, backgroundSize: 'cover'}}>
            <h1>{title}</h1>
            <p>{description}</p>

            <div>
                <h2>{title_1}</h2>
                <ul>
                    {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>{title_2}</h2>
                <ol>
                    {stages.map((stage, index) => (
                        <li key={index}>{stage}</li>
                    ))}
                </ol>
            </div>

            <div>
                <h2>{title_3}</h2>
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
