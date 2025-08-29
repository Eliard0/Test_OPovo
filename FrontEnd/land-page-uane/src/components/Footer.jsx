import React from "react";
import '../styles/footer.css';

import logo2 from '../assets/Logo_UANE2.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto flex flex-col md:flex-row justify-between items-star px-4 md:px-8 gap-6 py-5 backgroundFooterSectionOne">

                <div className="flex flex-col gap-2">
                    <img src={logo2} alt="UANE Logo" />
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-sm titleInfo">Informações</h4>
                    <a href="#cursos" className="text-xs info">Perguntas Frequentes</a>
                    <a href="#destaques" className="text-xs info">Política de Privacidade</a>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-sm titleInfo">Fale conosco</h4>
                    <a href="#" className="text-xs info flex items-center gap-1">
                        <FaWhatsapp />
                        (85) 99332-8888
                    </a>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h4 className="font-bold text-sm titleInfo">Nos acompanhe nas redes sociais</h4>
                    <div className="flex gap-3">
                        <a href="#" className="flex items-center justify-center text-white backgroundInfo"><FaFacebook /></a>
                        <a href="#" className="flex items-center justify-center text-white backgroundInfo"><FaInstagram /></a>
                        <a href="#" className="flex items-center justify-center text-white backgroundInfo"><FaYoutube /></a>
                    </div>
                </div>

            </div>

            <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 gap-6 py-3 backgroundFooterSectionTwo">
                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xsn">Av. Aguanambi, 282 A - Joaquim Távora, Fortaleza - CE, 60055-402</h3>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-sm text-white">Expediente</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
