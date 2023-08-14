import React from 'react';
import "./projects.css";
import Image1 from "../../assets/project1.jpeg"
import Image2 from "../../assets/project2.png"
import Image3 from "../../assets/project3.png"
import Image4 from "../../assets/project4.png"
import Image5 from "../../assets/project5.png"


function Projects() {
  return (
    <section className="projects container section" id='projetos'>
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Principais Projetos</span>

        <div className="projects__container">
            <div className="project__data">
                <img src={Image1} alt="" className="project__img" />

                <h3 className="project__title">Gerenciador Tarefas</h3>
                <p className="project__description">Projeto Java desenvolvido utilizando JSF 
                    e biblioteca primefaces, PostgreSQL e outras tecnologias.</p>
                <div className="project__icons-box">
                    <a href="https://github.com/rondicunha/projeto-gerenciador-tarefas" className='project__icon' target="_blank" >
                        <i class='bx bx-code-alt'></i>
                    </a>
                </div>
            </div>

            <div className="project__data">
                <img src={Image2} alt="" className="project__img" />

                <h3 className="project__title">Gerenciador Finanças</h3>
                <p className="project__description">Projeto construido em React com Vite, utilizando biblioteca MaterialUI, 
                            que consome uma API feita em NodeJS e PostgreSQL.</p>
                <div className="project__icons-box">
                    <a href="https://gerenciador-financas-ten.vercel.app/" className='project__icon' target="_blank">
                        <i class='bx bx-globe'></i>
                    </a>
                    <a href="https://github.com/rondicunha/gerenciador-financas" className='project__icon' target="_blank">
                        <i class='bx bx-code-alt' ></i>
                    </a>
                </div>
            </div>

            <div className="project__data">
                <img src={Image3} alt="" className="project__img" />

                <h3 className="project__title">Dados de Fotos</h3>
                <p className="project__description">Projeto em Python que processa os metadados,
                        exibindo seus dados em uma tabela e mostrando onde foi tirada no mapa, utilizando TKintnerMapView</p>
                <div className="project__icons-box">
                    <a href="https://github.com/rondicunha/projeto-python-POO" className='project__icon' target="_blank">
                        <i class='bx bx-code-alt'></i>
                    </a>
                </div>
            </div>

            <div className="project__data">
                <img src={Image4} alt="" className="project__img" />

                <h3 className="project__title">Tela de Login</h3>
                <p className="project__description">Tela de login simples construída com HTML, CSS e JavaScript, com efeito Light e Dark.</p>
                <div className="project__icons-box">
                    <a href="https://rondicunha.github.io/simple-login-screen/" className='project__icon' target="_blank">
                        <i class='bx bx-globe'></i>
                    </a>
                    <a href="https://github.com/rondicunha/simple-login-screen" className='project__icon' target="_blank">
                        <i class='bx bx-code-alt' ></i>
                    </a>
                </div>
            </div>

            <div className="project__data">
                <img src={Image5} alt="" className="project__img" />

                <h3 className="project__title">Carrinho de Compras API </h3>
                <p className="project__description">Sacola API para Servir uma Aplicação com Domínio de Delivery, contruida com Java, Spring, 
                                Spring Boot, PostgreSQL, Lombok entre outras tecnologias.</p>
                <div className="project__icons-box">
                    <a href="https://github.com/rondicunha/sacola-api_IFOOD_DEV_WEEK" className='project__icon' target="_blank">
                        <i class='bx bx-code-alt'></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;