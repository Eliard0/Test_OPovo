import React from "react"
import { IoIosArrowForward } from "react-icons/io";
import "../styles/Courses.css"
import CourseCard from "../components/CourseCard";
import Foto_curso_1 from "../assets/Foto_curso_1.png";
import Foto_curso_2 from "../assets/Foto_curso_2.png";
import Foto_curso_3 from "../assets/Foto_curso_3.png";
import Foto_curso_4 from "../assets/Foto_curso_4.png";

const Courses = () => {
    const coursesData = [
        {
            id: 1,
            imageUrl: Foto_curso_1,
            imageAlt: 'Curso de Gestão',
            title1: 'EXTENSÃO',
            title2: 'BEM-VIVER',
            description: 'Educação Ambiental para um Presente Sustentável',
            additionalInfo: 'Por Fundação Demócrito Rocha'
        },
        {
            id: 2,
            imageUrl: Foto_curso_2,
            imageAlt: 'Curso de Marketing Digital',
            title1: 'CURTA DURAÇÃO',
            title2: 'TECNOLOGIA E PROFISSÃO',
            description: 'Como Implementar a Política Municipal de Educação Ambiental',
            additionalInfo: 'Por Daniel Pagliuca'
        },
        {
            id: 3,
            imageUrl: Foto_curso_3,
            imageAlt: 'Curso de Programação',
            title1: 'CURTA DURAÇÃO',
            title2: 'BEM-VIVER',
            description: 'Bullying: conhecer para combater',
            additionalInfo: 'Por Grecianny Carvalho'
        },
        {
            id: 4,
            imageUrl: Foto_curso_4,
            imageAlt: 'Curso de Fotografia',
            title1: 'EXTENSÃO',
            title2: 'BEM-VIVER',
            description: 'Gestão Fiscal Interfederativa',
            additionalInfo: 'Por Fundação Demócrito Rocha'
        },
    ];

    return (
        <section className="bg-gray-100 pl-32 pr-32">
            <div className="pb-5">
                <p className="flex items-center gap-2 titleInfoCouses">
                    Cursos
                    <IoIosArrowForward className="iconArroRightCourses" />
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coursesData.map((course) => (
                    <CourseCard
                        key={course.id}
                        imageUrl={course.imageUrl}
                        imageAlt={course.imageAlt}
                        title1={course.title1}
                        title2={course.title2}
                        description={course.description}
                        additionalInfo={course.additionalInfo}
                    />
                ))}
            </div>
        </section>
    )
}

export default Courses