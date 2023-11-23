import React from 'react';
import { ButtonContainer } from './styles'

const Button = ({onClicK}) => {
  return (
    <ButtonContainer onClick={onClicK}>
      Buscar
    </ButtonContainer>
  )
}

export default Button;
