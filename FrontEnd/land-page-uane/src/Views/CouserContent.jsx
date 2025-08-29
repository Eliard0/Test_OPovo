import React from 'react';
import ButtonDropdown from '../components/ButtonDropdown';
import "../styles/CouserContent.css"

const CouserContent = () => {
    const data = [
        {
            title: "Módulo 1 - Secretaria escolar",
            content: "Você se apropriará dos conhecimentos relativos ao perfil do secretário escolar, atribuições, rotina e atendimento ao público, compreendendo a relação da ética e moral na vida profissional e, como a liderança e organização podem contribuir para o sucesso desse setor."
        },
        {
            title: "Módulo 2 - Redação oficial e informática",
            content: "Apresentação dos modelos de documentos e redação oficiais, apontando programas que auxiliam o profissional da Secretaria Escolar na elaboração dos mesmos. Você saberá a importância da redação oficial no âmbito educacional e aprenderá a utilizar programas como o Word do Microsoft Office e o Writer do OpenOffice.org e, o Excel do Microsoft Office e do Calc do OpenOffice.org., para a criação, edição e impressão de documentos."
        },
        {
            title: "Módulo 3 - Estatística básica e indicadores educacionais",
            content: "Estudo sobre Estatística e os Indicadores Educacionais que o profissional de Secretaria Escolar precisa dominar para mensurar alguns resultados da instituição de ensino. Você aprenderá a importância da estatística no dia a dia e no setor de Secretaria Escolar, conhecendo a aplicação da estatística por meio da coleta de dados, representando os resultados de diferentes modos."
        },
        {
            title: "Módulo 4 - Planejamento, gestão e legislação educacional",
            content: "Apresentação da história e organização da educação brasileira, imprescindível para o conhecimento da progressão da educação na história social, política, econômica e legislativa do país. Você conhecerá a trajetória histórica da educação, sua organização, os serviços educacionais, sistemas de informatização criados pelo Ministério da Educação, para o controle e acompanhamento das políticas públicas educacionais no país, além de apresentar aspectos ligados ao processo de ensino e aprendizagem, advindos de teorias dos campos da Pedagogia e Psicologia."
        },
        {
            title: "Módulo 5 - Funcionamento e organização da secretaria escolar",
            content: "A escrituração escolar, os documentos de gestão e os processos de avaliação na educação. Você aprenderá sobre os registros relativos à vida escolar do aluno e da escola. Os procedimentos de elaboração dos documentos de gestão que norteiam a prática pedagógica e organizam a instituição de ensino de forma democrática. Além disso, conhecerá os processos de avaliação da instituição de ensino e aqueles provenientes do Ministério da Educação."
        },
        {
            title: "Módulo 6 - Legislação educacional",
            content: "Estudo da legislação nacional, estadual e modelos de documentos escolares oficiais. Você estudará a legislação nacional que orienta a organização escolar básica, seus níveis e modalidade de ensino, além das orientações de funcionamento escolar a nível estadual e, os documentos escolares oficiais utilizados."
        },
        {
            title: "Módulo 7 - Estágio supervisionado",
            content: "O módulo 7 é o momento em que você realizará o Estágio Curricular Supervisionado, conforme regulamenta a Resolução CNE/CEB n° 02/2005 e Resolução n° 466/2018 do Conselho Estadual de Educação do Ceará. Neste período, você irá a campo vivenciar o espaço da Secretaria Escolar, aprimorando os conhecimentos obtidos ao dialogar com a realidade prática profissional."
        }
    ];

    return (
        <section className="bg-gray-100 px-4 md:px-32 py-12">
            <p className="px-2 mb-3 CouserContentTitle">O que você vai aprender</p>
            <div className="flex flex-col gap-2 w-full">
                {data.map((item, index) => (
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

export default CouserContent;