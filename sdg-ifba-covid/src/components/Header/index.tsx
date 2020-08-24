import React, {useContext} from 'react';
import {Container, OptionsContainer} from './styles';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components'


interface Props {
  toggleTheme(): void;
}




const Header:React.FC<Props> = ({toggleTheme, children}) => {
   const {colors, title} = useContext(ThemeContext)

  return (
    <div>
      <Container>
        <h1>SDG</h1>

        <OptionsContainer>

            <li><a>Situação</a></li>
            <li><a>Sobre</a></li>
          
        </OptionsContainer>

        <Switch
         onChange={toggleTheme}
         checked ={title === 'dark'}
         checkedIcon = {false}
         uncheckedIcon ={false}
         height={10}
         width={40}
         handleDiameter={20}
         offColor={colors.secundary}
         onColor={colors.primary}
        />
       
      </Container>

      {children}
    </div>
  )
}



export default Header;