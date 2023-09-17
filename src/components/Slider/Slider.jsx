import { useState } from 'react';
import './style.scss';

const Slider = ({ children }) => {
    const [activeId, setActiveId] = useState(0)

    

    return (
        <div className="slider">
        {children.map((slide, idx) => (
            <div className={`slide${idx === activeId ? ' active' : ""}`} >{slide}</div>
        ))}
        </div>
    );
};

export default Slider;