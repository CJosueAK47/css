import React from 'react';
import { CabecalhoModule } from './Cabecalho.module'; // Importa o styled-component

const Cabecalho = () => {
  return (
    <CabecalhoModule>
      <header className="cabecalho">
        <h1>EBAC Jobs</h1>
      </header>
    </CabecalhoModule>
  );
};

export default Cabecalho;

