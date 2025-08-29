import React from "react";
import "../styles/TimeInfoCourse.css"

const TimeInfoCourse = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 tablet:px-8 lg:px-32 backgrounsSectionTimeInfo">
      <div className="flex flex-wrap tablet:flex-nowrap gap-4 justify-center">
        <div className="flex-1 text-center tablet:text-left">
          <h3 className="text-xl tablet:text-2xl text-gray-700 mb-2 titleInfoCourse">CARGA HORÁRIA</h3>
          <span className="text-black fontDataCourse tablet:text-[32px]">1.500 horas</span>
        </div>
        <div className="flex-1 text-center tablet:text-left">
          <h3 className="text-xl tablet:text-2xl text-gray-700 mb-2 titleInfoCourse">CONTEÚDO</h3>
          <p className="text-black fontDataCourse tablet:text-[32px]">7 módulos</p>
        </div>
        <div className="flex-1 text-center tablet:text-left">
          <h3 className="text-xl tablet:text-2xl text-gray-700 mb-2 titleInfoCourse">PERÍODO DE ACESSO</h3>
          <p className="text-black fontDataCourse tablet:text-[32px]">15 meses</p>
        </div>
        <div className="flex-1 text-center tablet:text-left">
          <h3 className="text-xl tablet:text-2xl text-gray-700 mb-2 titleInfoCourse">MODALIDADE</h3>
          <p className="text-black fontDataCourse tablet:text-[32px]">EAD</p>
        </div>
      </div>
    </section>
  );
};

export default TimeInfoCourse;
