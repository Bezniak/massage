// HoverHeader.tsx

import React, {FC} from 'react';
import s from './HoverHeader.module.css';
import {NavLink, useNavigate} from 'react-router-dom';
import {FaArrowRightLong} from "react-icons/fa6";

interface HoverPropsType {
    items?: {
        title: React.ReactNode;
        path: string;
    }[];
    width?: number;
    height?: number;
}

const HoverHeader: FC<HoverPropsType> = (props) => {

    const navigate = useNavigate();


    const handleItemClick = (path: string) => {
        navigate(`${path}`);
    };

    const items = props.items || [];

    return (
        <div className={`${s.hoverBlock}`} style={{width: `${props.width}px`, height: `${props.height}px`}}>
            <ul className={s.hoverList}>
                {items.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item.path)}>
                        <NavLink to={`${item.path}`}>
                            <FaArrowRightLong className={s.arrow}/>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HoverHeader;
