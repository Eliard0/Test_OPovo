import React, { useRef } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../styles/Courses.css"
import CourseCard from "../components/CourseCard";
import Foto_curso_1 from "../assets/Foto_curso_1.png";
import Foto_curso_2 from "../assets/Foto_curso_2.png";
import Foto_curso_3 from "../assets/Foto_curso_3.png";
import Foto_curso_4 from "../assets/Foto_curso_4.png";

const Courses = () => {
    const trackRef = useRef(null);

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

    const scrollByAmount = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const amount = Math.round(el.clientWidth * 0.9);
        el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
    };

    return (
        <section className="bg-gray-100">
            <div className="container mx-auto py-10 px-4 md:px-32">
                <div className="pb-5">
                    <p className="flex items-center gap-2 titleInfoCouses">
                        Cursos
                        <IoIosArrowForward className="iconArroRightCourses" />
                    </p>
                </div>

                <div className="relative">
                    <div
                        ref={trackRef}
                        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
                    >
                        {coursesData.map((course) => (
                            <div key={course.id} className="snap-start flex-none w-full tablet:w-1/2 lg:w-1/4 px-3">
                                <CourseCard {...course} />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => scrollByAmount("prev")}
                        className="flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-105 transition z-20"
                        aria-label="Anterior"
                    >
                        <IoIosArrowBack />
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollByAmount("next")}
                        className="flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-105 transition z-20"
                        aria-label="Próximo"
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Courses