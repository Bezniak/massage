import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import {WelcomeSection} from './components/WelcomeSection/WelcomeSection';
import {MassagesType} from './components/MassagesType/MassagesType';
import {PhotoCollection} from './components/PhotoCollection/PhotoCollection';
import ConclusionSection from './components/ConclusionSection/ConclusionSection';
import {Footer} from './components/Footer/Footer';
import {MassageInfo, WelcomeSectionData} from "./data/data";
import DynamicMassageTypeDescription from "./components/TypeOfMassage/DynamicMassageTypeDescription";
import {Preloader} from "./components/common/Preloader/Preloader";


interface MassageData {
    id: string;
    image: string;
    title: string;
    description: string;
}

interface PhotoCollectionItem {
    id: number;
    url: string;
}

interface Data {
    welcomeSection: WelcomeSectionData;
    massageData: MassageData[];
    photoCollection: PhotoCollectionItem[];
    conclusionSection: WelcomeSectionData;
    massageTypeDescription: {
        classicBodyMassage: MassageInfo
        backMassage: MassageInfo,
        cervicalCollarArea: MassageInfo;
        footMassage: MassageInfo;
        handMassage: MassageInfo;
        honeyMassage: MassageInfo;
        cuppingMassage: MassageInfo;
        faceMassage: MassageInfo;
        relaxingMassage: MassageInfo;
    }
}

interface AppProps {
    data: Data;
}

function App({data}: AppProps) {
    return (
        <div className='App'>
            <div className='appBlock'>
                <div className='appWrapper'>
                    <Header/>
                </div>

                <Routes>
                    <Route
                        path='/massageBaranovichiMain'
                        element={
                            <>
                                <MainContent/>
                                <WelcomeSection {...data.welcomeSection} />
                                <MassagesType massageData={data.massageData}/>
                                <PhotoCollection photoCollection={data.photoCollection}/>
                                <ConclusionSection {...data.conclusionSection} />
                            </>
                        }
                    />
                    <Route
                        path='massage-description/:massageType'
                        element={<DynamicMassageTypeDescription
                            massageTypeDescription={data.massageTypeDescription}/>}
                    />
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default App;