import { createGlobalStyle } from "styled-components";

export const GlobalLayout = createGlobalStyle `
    body{
        background: ${({ theme }) => theme.body};

        transition: all 0.15s linear;
    }

    button{
        background-color: ${({ theme }) => theme.buttonBackgroundColor};
        border: none;
        color: ${({ theme}) => theme.text};
        padding: 15px 32 px;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        
        &:hover {
            pácity:0.6;
        }
    }
`;