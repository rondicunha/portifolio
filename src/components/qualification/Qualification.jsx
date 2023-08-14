import React, { useState } from 'react';
import './qualification.css';

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualificação</h2>
        <span className="section__subtitle">Minha Jornada</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon" ></i>
                    Educação
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon" ></i>
                    Experiência
                </div>
            </div>

            <div className="qualification__section">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Engenharia de Computação </h3>
                                <span className="qualification__subtitle"> UFRN - Universidade Federal do Rio Grande do Norte</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    07/2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bacharel em Ciências e Tecnologia</h3>
                                <span className="qualification__subtitle"> UFRN - Universidade Federal do Rio Grande do Norte</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    07/2017 - 07/2023
                                </div>
                            </div>
                        </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Analista Requisitos (Estágio)</h3>
                            <span className="qualification__subtitle"> STI - Superintendência de Tecnologia da Informação</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                04/2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  );
}

export default Qualification;