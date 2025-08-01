import React from 'react';

import arrowTop from '@/assets/arrow_top.png'

const Collapse = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="collapse">
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