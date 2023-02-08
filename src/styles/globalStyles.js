import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: black;
    }
    button{
        cursor: pointer;
        border: none;
    }

    :root{
        --color-primary: #ff577f;
        --color-primary-Focus: #ff427f;
        --color-primary-Negative: #59323f;
        
        --gray0: #F8F9FA;
        --gray1: #868E96;
        --gray2: #343B41;
        --gray3: #212529;
        --gray4: #121214;

        --positiveFeedBack: #3FE864;
        --negativeFeedBack: #E83F5B;

}

`;
