import React from 'react'
import styled from "styled-components"

const DarkModeButton = styled.button`
background: ${({ theme }) => theme.buttonBackgroundColor};
border: 2px solid ${({ theme }) => theme.toggleBorder};
color: ${({ theme }) => theme.text};
border-radius: 30px;
cursor: pointer;
font-size: 0.8rem;
padding: 0.6rem;
`;

function Toggle({ themeLabel, toggleTheme }) {
    let label = ['Mudar para', themeLabel === 'light' ? 'Escuro' : 'Claro'].join(' ');
    return (
        <DarkModeButton onClick={toggleTheme}>
            {themeLabel}
        </DarkModeButton>
    );
}

export default Toggle;