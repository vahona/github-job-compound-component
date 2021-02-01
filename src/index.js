import React from 'react'
import ReactDOM from 'react-dom'
import { ContextProvider } from './Context'
import { App } from './app'
import {GlobalStyles} from './global-style'


ReactDOM.render(
    <ContextProvider>
       <GlobalStyles/>
        <App/>
    </ContextProvider>,
    document.getElementById("root") 
)