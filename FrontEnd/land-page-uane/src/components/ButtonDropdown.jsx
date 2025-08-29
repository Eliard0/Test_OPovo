import React, { useState } from 'react';
import "../styles/buttonDropdown.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ButtonDropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="backgroundButtonDropdown w-full">
            <div
                className="flex justify-between items-center py-4 px-2 cursor-pointer transition-colors duration-300"
                onClick={toggleOpen}
            >
                <h3 className={`text-xl font-semibold ${isOpen ? 'text-black' : 'title'}`}>{title}</h3>
                {isOpen ? (
                    <IoIosArrowUp className="styleArroButtonUp"/>
                ) : (
                    <IoIosArrowDown className="styleArroButtonDown" />
                )}
            </div>
            
            <div
                className={`
                    transition-max-height duration-500 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-screen' : 'max-h-0'}
                `}
            >
                <p className="px-2 pb-4 text-gray-700 bg-white">{content}</p>
            </div>
        </div>
    );
};

export default ButtonDropdown;