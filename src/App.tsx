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
import MassageTypeDescription from './components/MassageTypeDescription/MassageTypeDescription';
import {MassageInfo} from "./data/data";

interface WelcomeSection {
    title: string;
    description: string;
}

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
    welcomeSection: WelcomeSection;
    massageData: MassageData[];
    photoCollection: PhotoCollectionItem[];
    conclusionSection: WelcomeSection;
    massageTypeDescription: {
        classicMassageInfo: MassageInfo
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


                {/*<MainContent />*/}
                {/*<WelcomeSection {...data.welcomeSection} />*/}
                {/*<MassagesType massageData={data.massageData} />*/}
                {/*<PhotoCollection photoCollection={data.photoCollection} />*/}
                {/*<ConclusionSection {...data.conclusionSection} />*/}


                <Routes>


                    <Route
                        path='/'
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
                        path='massage-description/:id?'
                        element={<MassageTypeDescription {...data.massageTypeDescription.classicMassageInfo} />}
                    />
                </Routes>


                <Footer/>
            </div>
        </div>
    );
}

export default App;