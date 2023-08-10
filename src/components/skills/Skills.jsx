import React from 'react';
import "./skills.css";
import Frontend from "./Frontend";
import Backend from './Backend';

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title skills__section__title">Habilidades</h2>

        <div className="skills__container container grid">
            <Frontend />

            <Backend />
        </div>
    </section>
  );
}

export default Skills;