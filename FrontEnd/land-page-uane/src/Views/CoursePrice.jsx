import React from "react";
import "../styles/CoursePrice.css";
import LogoOP from "../assets/LogoOPPlus.png"

const CoursePrice = () => {
    return (
        <section className="bg-gray-100 pl-32 pr-32 py-20">
            <p className="px-2 mb-8 titleInfoCouserPrice">Investimentor</p>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 ">
                <div className="flex flex-col items-center gap-2 backgroundCardRegister py-12 h-full">
                    <h3 className="text-white text-center textTitle">
                        3º lote: Total de R$ 2.835,35  <br /> + Matrícula de R$ 70
                    </h3>
                    <h1 className="text-white textBody">
                        Até 15X de R$ 189,02
                    </h1>

                    <button className="text-white py-3 px-6 buttonRegister">
                        Faça sua matrícula
                    </button>
                </div>

                <div className="flex flex-col items-center gap-2 backgroundCardBonusInfo py-12 h-full">
                    <img src={LogoOP} alt=" logo O Povo" />
                    <h1 className="text-black textTitleBonus">
                        Ganhe acesso grátis por 90 dias.
                    </h1>
                    <h5 className="text-black text-center textBodyBonus">
                        Reportagens & Colunistas; <br /> Filmes & Séries; <br /> Podcasts & Web Stories.
                    </h5>

                    <h5 className="text-center textLinkOpovo">
                    Conheça o OPOVO+
                    </h5>
                </div>

            </div>
        </section>
    );
};

export default CoursePrice