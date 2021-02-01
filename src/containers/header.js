import React, {useContext} from 'react'

import {Header} from '../components'
import { Button, Input } from '../components/header/styles/header'

import {Context, MainJob} from './location'




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
    return (
      <Header onSubmit={searchLocation}>
        <Input placeholder="Title, companies, expertise or benefits"/>
        <Button>Search</Button>
      </Header>
    );
}

