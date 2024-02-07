import React from 'react';
import { VagaModules, vagaClassName, vagaTituloClassName, vagaLinkClassName } from './Vaga.module';

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <VagaModules>
    <li className={vagaClassName}>
      <h3 className={vagaTituloClassName}>{props.titulo}</h3>
      <ul>
        <li>Localizacao: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratacao: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ul>
      <a className={vagaLinkClassName} href="#">
        Ver detalhes e candidatar-se
      </a>
    </li>
  </VagaModules>
);

export default Vaga;

