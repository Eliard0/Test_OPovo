import React from "react";
import "../styles/CoursePrice.css";
import LogoOP from "../assets/LogoOPPlus.png"

const CoursePrice = () => {
    return (
        <section className="bg-gray-100 px-4 tablet:px-8 lg:px-32 py-20">
            <p className="px-2 mb-8 titleInfoCouserPrice text-center tablet:text-left">Investimento</p>

            <div className="grid grid-cols-1 md:grid-cols-1 tablet:grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="flex flex-col items-center gap-4 backgroundCardRegister py-12 w-full">
                    <h3 className="text-white text-center textTitle">
                        3º lote: Total de R$ 2.835,35  <br /> + Matrícula de R$ 70
                    </h3>
                    <h1 className="text-white textBody text-center">
                        Até 15X de R$ 189,02
                    </h1>

                    <button className="text-white py-3 px-6 buttonRegister">
                        Faça sua matrícula
                    </button>
                </div>

                <div className="flex flex-col items-center gap-4 backgroundCardBonusInfo py-12 w-full">
                    <img src={LogoOP} alt="logo O Povo" className="mx-auto" />
                    <h1 className="text-black textTitleBonus text-center">
                        Ganhe acesso grátis por 90 dias.
                    </h1>
                    <h5 className="text-black textBodyBonus text-center">
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