import React from "react";
import "../styles/HeroSection.css";
import fotoCurso from "../assets/Foto_do_curso.png";
import marcas from "../assets/Barra_de_marcas.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 backgroundSection">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6">

        <div className="flex justify-center order-0 lg:order-2">
          <img
            src={fotoCurso}
            alt="Alunos estudando"
            className="w-full max-w-[636px] h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 order-1 lg:order-1">
          <div className="flex gap-4">
            <h5 className="infoTec">TÉCNICO</h5>
            <h5 className="infoTec">TECNOLOGIA E PROFISSÃO</h5>
          </div>
          <p className="text-white font-bold text-4xl">Secretaria Escolar</p>
          <p className="text-gray-600 text-lg leading-relaxed text-white">
            O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente da escola, garantindo
            o funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes,
            ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos.
            Seja essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado.
            Invista na sua capacitação e faça a diferença na gestão escolar!
          </p>

          <div className="flex flex-col tablet:flex-row gap-4 items-center justify-center tablet:justify-start">
            <img
              src={marcas}
              alt="Marcas apoiadoras"
              className="max-w-full md:max-w-[300px] h-auto rounded-lg shadow-md"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow backgroundButton transition">
              Faça sua matrícula
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
