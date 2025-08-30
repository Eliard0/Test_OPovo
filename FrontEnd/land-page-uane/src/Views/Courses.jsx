import React, { useRef, useState, useEffect } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "../styles/Courses.css"
import CourseCard from "../components/CourseCard";
import { fetchCourses } from "../controllers/CourseController";
import ErroLoadingImage from '../assets/Foto_do_curso.png';

const Courses = () => {
    const trackRef = useRef(null);

    const placeholderCourses = Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        imageUrl: ErroLoadingImage,
        imageAlt: "Carregando...",
        titleOne: "Carregando...",
        titleTwo: "Carregando...",
        description: "Carregando...",
        additionalInfo: "Carregando..."
    }));
    const [courses, setCourses] = useState(placeholderCourses);

    useEffect(() => {
        fetchCourses()
            .then(data => {
                if (data) {
                    setCourses(data)
                } else {
                    setCourses(placeholderCourses)
                }
            })
            .catch(err => {
                console.error("Erro ao buscar cursos:", err)
                setCourses(placeholderCourses)
            });
    }, []);

    const displayCourses = courses;

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
                        {displayCourses.map((course) => (
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