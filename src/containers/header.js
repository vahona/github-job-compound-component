import React, {useContext} from 'react'

import {Header} from '../components'
import { Button, Input } from '../components/header/styles/header'

import {Context} from '../Context'







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
      <>
      <Header onSubmit={searchLocation}>
        <Input
          placeholder="Title, companies, expertise or benefits"
          type="text"
          id="Title"
        />
        <Button>Search</Button>
      </Header>
     
      </>
    );
}

