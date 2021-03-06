import React, {useContext} from 'react'

import {Header} from '../components'
import { Button, Input, Form } from '../components/header/styles/header'

import {Context} from '../Context'

import styled from "styled-components";



export default function HeaderContainer({children}) {

   const {
     jobs,
     Title,
     setTitle,
     description,
     isfull,
     setIsfull,
     setDescription,
   } = useContext(Context);




   function searchLocation(e) {
     e.preventDefault();
     setTitle(e.target.Title.value);
   }

   console.log(Context);
    return (
      <div>
        <Header onSubmit={searchLocation}>
          <Input
            placeholder="Title, companies, expertise or benefits"
            type="text"
            id="Title"
          />
          <Button>Search</Button>
        </Header>
      </div>
    );
}

