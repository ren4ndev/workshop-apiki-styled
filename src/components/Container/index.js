import React from "react";
import {
  Content,
  ContainerWrapper,
} from './style';

import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = () => {
  return (
    <ContainerWrapper>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
      </Content>
    </ContainerWrapper>
  );
};

export default Container;
