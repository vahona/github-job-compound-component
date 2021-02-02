import React from "react";


import {
  Logo,
  JobList,
  DateLocation,
  Dates,
  Text,
  Container,
  Button,
  Company,
  Descriptions,
  MoreInfo,
  Title,
  Span,
  SubTitle,
  SpanMail,
  Contact,
  Information,
  TitleJob,
  Application,
  Mail,
} from "./styles/description";

export default function Description({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}


Description.Contact = function HeaderContact({ children, restProps }) {
  <Contact {...restProps}>
    {children},
  </Contact>;
};

Description.Information = function HeaderInformation({ children, restProps }) {
  <Information {...restProps}> {children} </Information>;
};


