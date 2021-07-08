import React from 'react';

const Cabecalho = () => {
  return (
    <div className="cabecalho">
      <img className="imagem-logo" src="images/bank_logo.svg" alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </div>
    </div>
  );
};

export default Cabecalho;
