import React, {FC, useEffect, useState} from 'react';
import s from './MassageTypeDescription.module.css';
import {Preloader} from '../common/Preloader/Preloader';
import {Button} from "../common/Button/Button";
import {GiCheckMark} from "react-icons/gi";

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
    conclusionAdditionalInfo: string;
}

const MassageTypeDescription: FC<MassageProps> = (props) => {
    const {
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
        photoUrl,
        conclusionAdditionalInfo,
    } = props;

    const [loadingCount, setLoadingCount] = useState(0);

    const handleImageLoad = () => {
        setLoadingCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        const backgroundImg = new Image();
        backgroundImg.src = imageBG;
        backgroundImg.onload = handleImageLoad;

        const images = photoUrl.map((url, index) => {
            const img = new Image();
            img.src = url;
            img.onload = handleImageLoad;
            return img;
        });

        return () => {
            backgroundImg.onload = null;
            images.forEach((img) => (img.onload = null));
        };
    }, [imageBG, photoUrl]);

    if (loadingCount < photoUrl.length + 1) {
        return <Preloader/>;
    }

    return (
        <div className={s.typeDescriptionWrapper}>
            <div
                className={s.typeDescriptionBlock}
                style={{backgroundImage: `url(${imageBG})`, backgroundSize: 'cover', height: '100vh'}}
            >
                <div className={s.titleDescriptionBlock}>
                    <h1 className={s.mainTitle}>{title}</h1>
                    <p className={s.mainDescription}>{description}</p>
                </div>
            </div>
            <div className={s.typeDescriptionContent}>

                <div className={s.photoGallery}>
                    <div>
                        <h2 className={s.photoTitle}>Фотогалерея:</h2>
                    </div>
                    <div className={s.photoBlock}>
                        {photoUrl.map((url, index) => (
                            <img className={s.img} key={index} src={url} alt={`Massage session ${index + 1}`}/>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className={s.descriptionTitle}>{title_1}</h2>
                    <ul>
                        {benefits.map((benefit, index) => (
                            <li className={s.descriptionItem} key={index}>
                                <GiCheckMark className={s.icon}/> {benefit}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className={s.descriptionTitle}>{title_2}</h2>
                    <ol>
                        {stages.map((stage, index) => (
                            <li className={s.descriptionItem} key={index}><GiCheckMark className={s.icon}/> {stage}</li>
                        ))}
                    </ol>
                </div>

                <div>
                    <h2 className={s.descriptionTitle}>{title_3}</h2>
                    <ul>
                        {contraindications.map((contraindication, index) => (
                            <li className={s.descriptionItem} key={index}><GiCheckMark
                                className={s.icon}/> {contraindication}</li>
                        ))}
                    </ul>
                </div>


                <p className={s.conclusionDescription}>{conclusion}</p>
                <p className={s.conclusionDescriptionBook}>{conclusionAdditionalInfo}</p>

                <div className={s.btnConclusion}>
                    <Button title='Записаться на массаж прямо сейчас!' color={'black'}/>
                </div>
            </div>
        </div>
    );
};

export default MassageTypeDescription;
