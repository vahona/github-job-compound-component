import React from 'react'

import { Container, Input, Button, Background, Form } from "./styles/header";

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}


Header.Background = function HeaderBackground({children, restProps}) {
  <Background {...restProps}> {children} </Background>;
}

Header.Form = function HeaderForm({children, ...restProps}) {
  return (
    <Form {...restProps}>
      <Input> </Input>
      <Button type="submit"> </Button>;{children},
    </Form>
  );
}

// Header.Input = function HeaderInput({ children, ...restProps }) {
//   <Input {...restProps}> {children} </Input>
// };

// Header.Button = function FormButton({ children, ...restProps }) {
//   <Button {...restProps} > {children} </Button>;
// };




