import React from "react";
import './style.css'

const HomePage = () =>(
    <div>
        <h1>Escolha o seu caminho em JavaScript</h1>

        <div className="option-content">
            <a href="/front-end" className="option-front-end">Front-end</a>
            <a href="/back-end" className="option-back-end">Back-end</a>
        </div>

    </div>
)

export default HomePage;
