import React from 'react';
import { HeroModule } from "./Hero.module"; // Importa o styled-component

const Hero = () => (
  <HeroModule>
    <form className="form"> {/* Usa a classe CSS form */}
      <div className="container"> {/* Usa a classe CSS container */}
        <h2 className="heroTitle"> {/* Usa a classe CSS heroTitle */}
          As melhores vagas para tecnologia, design e artes visuais.
        </h2>
      </div>
    </form>
  </HeroModule>
);

export default Hero;

