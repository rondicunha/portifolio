import React from 'react';
import "./projects.css";
import Image1 from "../../assets/project1.jpeg"
import Image2 from "../../assets/project2.jpeg"
import Image3 from "../../assets/project3.jpeg"
import Image4 from "../../assets/project4.jpeg"

function Projects() {
  return (
    <section className="projects container section" id='projetos'>
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Principais projetos</span>

        <div className="projects__container">
            <div className="project__data">
                <img src={Image1} alt="" className="project__img" />

                <h3 className="project__title">Gerenciador Tarefas</h3>
                <p className="project__description">Projeto Java desenvolvido utilizando JSF 
                    e biblioteca primefaces, PostgreSQL e outras tecnologias.</p>
                <div className="project__icons-box">
                    <a href="" className='project__icon'>
                        <i class='bx bx-globe'></i>
                    </a>
                    <a href="" className='project__icon'>
                        <i class='bx bx-code-alt' ></i>
                    </a>
                </div>
            </div>

            <div className="project__data">
                <img src={Image2} alt="" className="project__img" />

                <h3 className="project__title">Gerenciador Tarefas</h3>
                <p className="project__description">Projeto Java desenvolvido utilizando JSF 
                    e biblioteca primefaces, PostgreSQL e outras tecnologias.</p>
                <div className="project__icons-box">
                    <a href="" className='project__icon'>
                        <i class='bx bx-globe'></i>
                    </a>
                    <a href="" className='project__icon'>
                        <i class='bx bx-code-alt' ></i>
                    </a>
                </div>
            </div>

            <div className="project__data">
                <img src={Image3} alt="" className="project__img" />

                <h3 className="project__title">Gerenciador Tarefas</h3>
                <p className="project__description">Projeto Java desenvolvido utilizando JSF 
                    e biblioteca primefaces, PostgreSQL e outras tecnologias.</p>
                <div className="project__icons-box">
                    <a href="" className='project__icon'>
                        <i class='bx bx-globe'></i>
                    </a>
                    <a href="" className='project__icon'>
                        <i class='bx bx-code-alt' ></i>
                    </a>
                </div>
            </div>

            <div className="project__data">
                <img src={Image4} alt="" className="project__img" />

                <h3 className="project__title">Gerenciador Tarefas</h3>
                <p className="project__description">Projeto Java desenvolvido utilizando JSF 
                    e biblioteca primefaces, PostgreSQL e outras tecnologias.</p>
                <div className="project__icons-box">
                    <a href="" className='project__icon'>
                        <i class='bx bx-globe'></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;