import { useState, useEffect } from 'react';
import { IconButton } from '../Buttons/IconButtons';
import { PlayButton } from '../Buttons/IconButtons';
import './style.scss';

const Slider = ({ data }) => {
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
    if (activeId < data.length - 1) {
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
            
            <PlayButton></PlayButton>
            
            <IconButton
                direction="right"
                onClick={next}
                disable={activeId === data.length - 1}
            />
            </div>
            <div className="slider">
            {data.map((slide, idx) => (
                <div
                key={idx}
                className={`slide${idx === activeId ? " active" : ""}`}
                >
                <div className="slide__info">
                    <div className="slide__name">{slide.name}</div>
                    <div className="slide__text">{slide.text}</div>
                </div>
                <img src={slide.img} alt={`Slide ${idx + 1}`} />
                </div>
            ))}
            </div>
        </div>
    );
};

export default Slider;