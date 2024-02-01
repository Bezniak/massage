import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import {WelcomeSection} from "./components/WelcomeSection/WelcomeSection";
import {MassagesType} from "./components/MassagesType/MassagesType";
import {PhotoCollection} from "./components/PhotoCollection/PhotoCollection";

interface WelcomeSection {
    title: string;
    description: string;
}

interface MassageData {
    id: number;
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
}

interface AppProps {
    data: Data;
}

function App({data}: AppProps) {
    return (
        <div className='App'>
            <div className="appBlock">
                <div className='appWrapper'>
                    <Header/>
                </div>
                <MainContent/>
                <WelcomeSection {...data.welcomeSection} />
                <MassagesType massageData={data.massageData}/>
                <PhotoCollection photoCollection={data.photoCollection}/>
            </div>
        </div>
    );
}

export default App;
