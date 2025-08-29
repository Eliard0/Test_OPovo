import React from "react";
import '../styles/header.css'

import logo from '../assets/Logo_UANE.png';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-white shadow-md fixed w-full z-10 header">
            <div className="w-full flex justify-between items-center px-4 md:px-8 py-4">

                <div>
                    <img src={logo} alt="UANE Logo" className="w-[75px] h-[24px]"/>
                </div>

                <nav className="flex gap-6 items-center">
                    <a href="#cursos" className="text-xs font-bold">CURSOS</a>
                    <a href="#destaques" className="text-xs font-bold">PROFESSORES</a>
                    <a href="#sobre" className="text-xs font-bold">SOBRE A UANE</a>
                    <a href="#contato" className="text-xs font-bold">PARCERIAS</a>
                    <a href="#contato" className="text-xs font-bold flex items-center gap-2">
                    <FaUserCircle className="h-6 w-6"/>
                        PORTAL DO ALUNO
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
