import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles'


const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
