import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <div>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />

                        <div className="home__img"></div>

                        <Data />
                    </div>

                    <ScrollDown />
                </div>
            </section>
        </div>
    )
}

export default Home;