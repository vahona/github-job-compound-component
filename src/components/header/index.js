import React from 'react'

export default function Header({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}


Header.Input = function HeaderInput({children, ...restProps}) {
    return <Input {...restProps} />
}