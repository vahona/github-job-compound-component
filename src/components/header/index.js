import React from 'react'

import { Container, Input, Button, Background } from "./styles/header";

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}


Header.Background = function HeaderBackground({children, restProps}) {
  <Background {...restProps}> {children} </Background>;
}

Header.Input = function HeaderInput({ children, ...restProps }) {
  <Input {...restProps}> {children} </Input>
};

Header.Button = function FormButton({ children, ...restProps }) {
  <Button {...restProps} > {children} </Button>;
};




