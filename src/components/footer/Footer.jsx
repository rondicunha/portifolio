import React from "react";
import "./footer.css";

const Footer = () => {
    return (
       <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rondinelle</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Habilidades</a>
                </li>

                <li>
                    <a href="projects" className="footer__link">Projetos</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/rondinelle-cunha/" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/rondicunha" className="footer__social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>
        </div>
       </footer>
    )
}

export default Footer;