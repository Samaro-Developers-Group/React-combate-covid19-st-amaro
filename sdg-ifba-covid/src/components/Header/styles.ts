import styled from 'styled-components';


export const Container = styled.header`
  position: fixed;
  color: ${props => props.theme.colors.text};
  width: 100vw;
  height: 80px;
  border-bottom: 2px solid ${props => props.theme.colors.secundary};
  display: flex;
  align-items: center;
  justify-content: space-around;


  h1{
    font-size: 3rem;
  }
`


export const OptionsContainer = styled.ul`
 display: flex;
 list-style: none;
 font-weight: bold;
 font-size: 2rem;


 li {
  padding: 10px;

  &:hover{
    color: green;
  }
 }

 
 
`


