import React from 'react'

import { Container, Input} from './styles/header'

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Input = function HeaderInput({children, ...restProps}) {
    return <Input {...restProps} />
}

