import React from 'react'

import HeaderContainer from "../containers/header";
import FormContainer from '../containers/form'
import MainJob from '../containers/location'


import styled from "styled-components";


const Containergrid = styled.div`
@media (min-width: 1000px) {
 display: grid;
 grid-template-columns: 200px auto;
 grid-gap: 2rem;
}
`;

export default function Home() {
    return (
      <>
        <HeaderContainer></HeaderContainer>
        <Containergrid>
          <div>
            <FormContainer></FormContainer>
          </div>
          <div>
            <MainJob></MainJob>
          </div>
        </Containergrid>
      </>
    );
}