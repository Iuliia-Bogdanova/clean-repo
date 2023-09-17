import { useState, useEffect } from 'react';
import { IconButton } from '../IconButton/IconButton';
import './style.scss';

const Slider = ({ children }) => {
    const [activeId, setActiveId] = useState(0)

// перемотка слайдов только вручную
// const prev = () => {
//     setActiveId(activeId => {
//         if (activeId > 0) {
//             return activeId - 1
//         }
//         return activeId
//     })
// }

// const next = () => {
//     setActiveId((activeId) => {
//         if (activeId < children.length - 1) {
//         return activeId + 1;
//         }
//         return activeId;
//     });
// };

// автопроигрывание
const prev = () => {
    if (activeId > 0) {
        setActiveId(activeId - 1);
    }
    };

    const next = () => {
    if (activeId < children.length - 1) {
        setActiveId(activeId + 1);
    } else {
        setActiveId(0); 
    }
    };

    useEffect(() => {
    const timer = setInterval(() => {
        next(); 
    }, 5000); 

    return () => {
        clearTimeout(timer); 
    };
}, [activeId]);

    return (
        <div className="slider-wrap">
            <div className="slider-actions">
            <IconButton
                direction="left"
                onClick={prev}
                disable={activeId === 0}
            />
            <IconButton
                direction="right"
                onClick={next}
                disable={activeId === children.length}
            />
            </div>
            <div className="slider">
            {children.map((slide, idx) => (
                <div className={`slide${idx === activeId ? " active" : ""}`}>
                {slide}
                </div>
            ))}
            </div>
        </div>
    );
};

export default Slider;