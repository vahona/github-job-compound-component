import React from "react";

import { Container, Input } from './styles/form'


export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}


Form.Input = function FormInput({ children, ...restProps }) {
  <Input {...restProps}> {children} </Input>;
};