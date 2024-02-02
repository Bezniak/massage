import React, {FC} from 'react';


interface MassageProps {
    title: string;
    description: string;
    benefits: string[];
    stages: string[];
    contraindications: string[];
    conclusion: string;
    photoUrl: string[];
}

const ClassicMassageComponent: FC<MassageProps> = ({ title, description, benefits, stages, contraindications, conclusion, photoUrl }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>

            <div>
                {photoUrl.map((photo, index) => (
                    <img key={index} src={photo} alt={`Massage session ${index + 1}`}/>
                ))}
            </div>

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

            <p>{conclusion}</p>
        </div>
    );
};

export default ClassicMassageComponent;
