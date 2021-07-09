import React, { useState } from "react";
import { Icone, Box, Button, Detalhe, Saldo } from '../UI/index';
import { IconeMargin } from './style';

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icone src="images/dinheiro.svg" alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? 'images/privado.svg' : 'images/olho.svg'}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
