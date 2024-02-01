import React, {FC} from 'react';
import s from './WelcomeSection.module.css';


type PropsType = {}

export const WelcomeSection: FC<PropsType> = () => {
    return (
        <div className={s.welcomeWrapper}>
            <div className={s.welcomeBlock}>
                <img src="/logo.svg" alt="logo" className={s.welcomeImg}/>
                <h2 className={s.welcomeTitle}>Добро пожаловать в Дом спокойствия, релаксации и передышки.</h2>
                <p className={s.welcomeDescription}>Все ищут места, где можно расслабиться и получить больше энергии. В
                    нашем оздоровительном центре встречаются тишина, энергия, красота и жизненная сила. Предлагаемые
                    нами
                    процедуры освежат ваше тело и душу. Мы будем рады приветствовать Вас и порекомендовать наши
                    возможности
                    и услуги.</p>
            </div>
        </div>
    );
};