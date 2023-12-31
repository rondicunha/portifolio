import React, { useState } from 'react';
import "./courses.css"

function Courses() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="courses section">
        <h2 className="section__title">Cursos</h2>
        <span className="section__subtitle">Extra Curriculares</span>

        <div className="courses__container container grid">
            <div className="courses__content">
                <div>
                    <i className="uil uil-setting courses__icon"></i>
                    <h3 className="courses__title">Back-End</h3>
                </div>

                <span className="courses__button" onClick={() => toggleTab(1)}>
                    Ver mais 
                    <i className="uil uil-arrow-right courses__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "courses__modal active-modal" : "courses__modal"} >
                    <div className="courses__modal-content">
                        <i className="uil uil-times courses__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="courses__modal-title">Back-End</h3>
                        <p className="courses__modal-description">Meus cursos sobre backend</p>

                        <ul className="courses__modal-courses grid">
                            <li className="courses__modal-course">
                                <i className="uil uil-check-circle courses__modal-icon"></i>
                                <p className="courses__modal-info">Java POO - Curso em vídeo</p>
                            </li>

                            <li className="courses__modal-course">
                                <i className="uil uil-check-circle courses__modal-icon"></i>
                                <p className="courses__modal-info">Testes unitários com JUnit - DIO</p>
                            </li>

                            <li className="courses__modal-course">
                                <i className="uil uil-check-circle courses__modal-icon"></i>
                                <p className="courses__modal-info">Realizando deploy na nuvem de um conjunto de API's desenvolvida em Spring -DIO</p>
                            </li>

                            <li className="courses__modal-course">
                                <i className="uil uil-check-circle courses__modal-icon"></i>
                                <p className="courses__modal-info">Conceitos e melhores práticas com PostgreSQL - DIO</p>
                            </li>

                            <li className="courses__modal-course">
                                <i className="uil uil-check-circle courses__modal-icon"></i>
                                <p className="courses__modal-info">CRUD completo com Spring Boot REST API - JDev</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="courses__content">
                <div>
                    <i className="uil uil-desktop courses__icon"></i>
                    <h3 className="courses__title">Front-End</h3>
                </div>

                <span className="courses__button" onClick={() => toggleTab(2)} >
                    Ver mais 
                    <i className="uil uil-arrow-right courses__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "courses__modal active-modal" : "courses__modal"}>
                    <div className="courses__modal-content">
                        <i className="uil uil-times courses__modal-close" onClick={() => toggleTab(0)}></i>

                        <h3 className="courses__modal-title">Front-End</h3>
                        <p className="courses__modal-description">Meus cursos sobre frontend</p>

                        <ul className="courses__modal-courses grid">
                            <li className="courses__modal-course">
                                <i className="uil uil-check-circle courses__modal-icon"></i>
                                <p className="courses__modal-info">Introdução a Criação de Websites com HTML5 e CSS3 - DIO</p>
                            </li>

                            <li className="courses__modal-course">
                                <i className="uil uil-check-circle courses__modal-icon"></i>
                                <p className="courses__modal-info">JavaScript - Curso em Vídeo</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Courses;