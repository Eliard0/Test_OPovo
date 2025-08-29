import React from "react";
import '../styles/footer.css';

import logo2 from '../assets/Logo_UANE2.png';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="mx-auto flex flex-col items-center text-center px-4 tablet:px-8 gap-6 py-5 backgroundFooterSectionOne
                tablet:flex-col tablet:items-center tablet:text-center
                lg:flex-row lg:justify-between lg:items-start lg:text-left">

                <div className="flex justify-center mb-4 lg:mb-0">
                    <img src={logo2} alt="UANE Logo" className="mx-auto" />
                </div>

                <div className="flex flex-col items-center gap-6 tablet:flex-row tablet:justify-between tablet:items-start lg:items-start lg:gap-6">

                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-sm titleInfo">Informações</h4>
                        <a href="#cursos" className="text-xs info">Perguntas Frequentes</a>
                        <a href="#destaques" className="text-xs info">Política de Privacidade</a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-sm titleInfo">Fale conosco</h4>
                        <a href="#" className="text-xs info flex items-center justify-center tablet:justify-start gap-2">
                            <FaWhatsapp className="text-green-500" />
                            (85) 99332-8888
                        </a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold text-sm titleInfo">Nos acompanhe nas redes sociais</h4>
                        <div className="flex justify-center tablet:justify-start gap-3">
                            <a href="#" className="flex items-center justify-center text-white backgroundInfo w-8 h-8 rounded-full"><FaFacebook /></a>
                            <a href="#" className="flex items-center justify-center text-white backgroundInfo w-8 h-8 rounded-full"><FaInstagram /></a>
                            <a href="#" className="flex items-center justify-center text-white backgroundInfo w-8 h-8 rounded-full"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mx-auto flex flex-col tablet:flex-row justify-between items-center tablet:items-center px-4 tablet:px-8 gap-6 py-3 backgroundFooterSectionTwo">
                <div className="flex flex-col gap-2 text-center tablet:text-left">
                    <h3 className="text-white text-xs">
                        Av. Aguanambi, 282 A - Joaquim Távora, Fortaleza - CE, 60055-402
                    </h3>
                </div>
                <div className="flex flex-col gap-2 text-center tablet:text-left">
                    <h4 className="font-bold text-sm text-white">Expediente</h4>
                </div>
            </div>

        </footer>
    );
};

export default Footer;