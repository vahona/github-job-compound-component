import React from 'react'

import {Header} from '../components'
import { Button, Input } from '../components/header/styles/header'

export default function HeaderContainer() {
    return (
      <Header>
        <Input placeholder="Title, companies, expertise or benefits"/>
        <Button>Search</Button>
      </Header>
    );
}

