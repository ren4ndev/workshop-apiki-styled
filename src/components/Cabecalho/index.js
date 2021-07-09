import React from 'react';
import {
  StyledHeader,
  Logo,
  BtnHeader,
} from './style';

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo className="imagem-logo" src="images/bank_logo.svg" alt="Logo Smart Bank" />
      <div>
        <BtnHeader
          className="btn-secundario"
          href="https://google.com"
          primary
        >
          Ajuda
        </BtnHeader>
        <BtnHeader
          className="btn-primario"
          href="https://google.com"
        >
          Sair
        </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
