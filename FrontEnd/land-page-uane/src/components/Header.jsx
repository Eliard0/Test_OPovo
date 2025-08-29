import React, { useState } from "react";
import '../styles/header.css'

import logo from '../assets/Logo_UANE.png';
import { FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed w-full z-10 header">
            <div className="w-full flex justify-between items-center px-4 md:px-8 py-4">

                <div>
                    <img src={logo} alt="UANE Logo" className="w-[75px] h-[24px]" />
                </div>

                <nav className="hidden md:flex gap-6 items-center">
                    <a href="#cursos" className="text-xs font-bold">CURSOS</a>
                    <a href="#destaques" className="text-xs font-bold">PROFESSORES</a>
                    <a href="#sobre" className="text-xs font-bold">SOBRE A UANE</a>
                    <a href="#contato" className="text-xs font-bold">PARCERIAS</a>
                    <a href="#contato" className="text-xs font-bold flex items-center gap-2">
                        <FaUserCircle className="h-6 w-6" />
                        PORTAL DO ALUNO
                    </a>
                </nav>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX className="text-white"/> : <FiMenu className="text-white"/>}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">Home</a>
                    <a href="#cursos" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">Cursos</a>
                    <a href="#sobre" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">Sobre</a>
                    <a href="#contato" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">Contato</a>
                </div>
            )}
        </header>
    );
};

export default Header;
