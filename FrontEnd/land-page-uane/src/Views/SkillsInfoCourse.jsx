import React from 'react';
import ButtonDropdown from '../components/ButtonDropdown';
import "../styles/SkillsInfoCourse.css"

const SkillsInfoCourse = () => {
    const skillsData = [
        {
            title: "Competências que você vai desenvolver",
            content: "O curso aborda o papel do(a) secretário(a) escolar, suas atribuições e competências, incluindo organização de arquivos, credenciamento de escolas e relações interpessoais no ambiente de trabalho. Também apresenta noções de redação oficial, com modelos de documentos, gramática aplicada e uso adequado de pronomes de tratamento. Na parte de informática, são exploradas funções básicas de editores de texto e planilhas para organização e apresentação de dados. Por fim, o curso trata dos principais instrumentais da Secretaria Escolar, como a escrituração, documentos de gestão e avaliações de aprendizagem."
        },
        {
            title: "Para quem se destina",
            content: "Esse curso é para você, que já concluiu ou está concluindo o ensino médio e quer se capacitar para entrar no mercado de trabalho. É gestor escolar e quer ampliar os seus conhecimentos a respeito dos processos realizados na secretaria escolar. Que deseja ter uma formação técnica para estar preparado(a) para realizar concurso público e atuar em escolas públicas ou privadas."
        },
        {
            title: "Quando será o pagamento da primeira mensalidade e a data de início do curso?",
            content: "As aulas começam 21 de julho, mas a 1ª mensalidade do Curso Técnico em Secretaria Escolar será cobrada apenas 10 de agosto de 2025."
        },
        {
            title: "Quais são as condições de pagamento e quais os descontos oferecidos?",
            content: "À vista (20% de desconto): Valor final: R$ 2.268,28 Parcelado em 2 a 6 vezes (10% de desconto): Valor final: R$ 2.551,80 Parcelamento acima de 6 vezes (sem desconto): Valor final: R$ 2.835,35"
        }
    ];

    return (
        <section className="bg-gray-100 px-4 md:px-32 py-12">
            <p className="px-2 mb-3 titleInfoSkill">Informações para decidir</p>
            <div className='flex flex-col gap-2 w-full'>
                {skillsData.map((item, index) => (
                    <ButtonDropdown
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </section>
    );
};

export default SkillsInfoCourse;