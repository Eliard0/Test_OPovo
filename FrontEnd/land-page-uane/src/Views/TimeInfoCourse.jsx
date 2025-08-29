import React from "react";
import "../styles/TimeInfoCourse.css"

const TimeInfoCourse = () => {
    return (
        <section className="bg-gray-100 py-12 pl-32 backgrounsSectionTimeInfo">
            <div className="flex flex-wrap gap-4">
                <div className="flex-1 ">
                    <h3 className="text-xl text-gray-700 mb-2 titleInfoCourse">CARGA HORÁRIA</h3>
                    <span className="text-black fontDataCourse">1.500 horas</span>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl text-gray-700 mb-2 titleInfoCourse">CONTEÚDO</h3>
                    <p className="text-black fontDataCourse">7 módulos</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl text-gray-700 mb-2 titleInfoCourse">PERÍODO DE ACESSO</h3>
                    <p className="text-black fontDataCourse">15 meses</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl text-gray-700 mb-2 titleInfoCourse">MODALIDADE</h3>
                    <p className="text-black fontDataCourse">EAD</p>
                </div>
            </div>
        </section >
    );
};

export default TimeInfoCourse;
