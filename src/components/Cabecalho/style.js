import styled from 'styled-components';
import { corPrimaria } from '../../styles/variables';

export const StyledHeader = styled.nav`
background-color: ${corPrimaria};
display: flex;
justify-content: space-between;
padding: 0 15vw;
height: 10vh;
align-items: center;
`;

export const Logo = styled.img`
height: 50px;
width: 50px;
`;

export const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${({ primary }) => primary ? 'white' : corPrimaria};
  color: ${({ primary }) => primary ? corPrimaria : 'white'};
`;