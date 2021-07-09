import styled from 'styled-components';

export const ContainerWrapper = styled.div`
background-color: #f1f1f1;
min-height: 90vh;
padding: 0px 15vw;
`;

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

@media (max-width: 800px) {
  flex-direction: column;
}
`;