import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        background-color: rgb(230,230,250);
        font-size: 16px;
        margin: 0;
    }

    body {
        padding: 0;
        margin: 0;
        max-width: 1440px;
        max-height: 2724px;
        margin-inline-start: auto;
        margin-inline-end: auto;
    }
`;
