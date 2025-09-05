import React, { useState } from 'react';
import './Collapse.css'

import arrowTop from '@/assets/arrow_top.png'

const Collapse = ({ title, children, className='' }) => {  

    const [isOpen, setIsOpen] = useState(false)

    const onToggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div className={`collapse ${className}`}>
            <div className="collapseHeader" onClick={onToggle}>
                <span className="collapseTitle">{title}</span>
                <img
                    src={arrowTop}
                    className={`collapseArrow ${isOpen ? 'open' : ''}`}
                    alt="Flèche"
                />
            </div>
            {isOpen && (
                <div className="collapseContent">
                    {children}
                </div>
            )} 
        </div>
    );
};

export default Collapse;