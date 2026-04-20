import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    margin-top: 10rem;
    background-color: #f5f5f5;
}

body, input, button {
      font-family: 'Poppins', sans-serif;
    }
      
    button{
        cursor: pointer;
        transition: filter 0.3;

            &:hover{
            cursor: pointer;
            filter: brightness(1.4); /* Efeito de brilho ao passar o mouse */
            transition: filter 0.3s;
        }
    }
`;


