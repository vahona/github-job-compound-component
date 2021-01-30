import React from 'react'

import { Container, Input, Button, Form} from './styles/header'

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Form = function HeaderForm({ children, ...restProps }) {
  return (
    <Form {...restProps}>
      {" "}
      {children}
      <Input {...restProps} />
      <Button>Serach</Button>
    </Form>
  );
};




