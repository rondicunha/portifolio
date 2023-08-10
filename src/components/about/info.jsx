import React from 'react';

function Info() {
  return (
    <div className="about__info grid">
        
        <div className="about__box">
          <i class='bx bxs-graduation about__icon' ></i>
            <h3 className="about__title">Bacharel em Ciências e Tecnologia</h3>
            <span className="about__subtitle">UFRN</span>
        </div>

        <div className="about__box">
            <i class='bx bxs-graduation about__icon' ></i>
            <h3 className="about__title">Graduando em Eng. de Computação</h3>
            <span className="about__subtitle">UFRN</span>
        </div>
    </div>
  );
}

export default Info;