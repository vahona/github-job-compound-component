import React from 'react'

import HeaderContainer from "../containers/header";
import FormContainer from '../containers/form'
import MainJob from '../containers/location'

export default function Home() {
    return (
        <>
         <HeaderContainer></HeaderContainer>
         <FormContainer></FormContainer>
         <MainJob></MainJob>
        </>
    )
}