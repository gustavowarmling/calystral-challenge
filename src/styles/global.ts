import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #FFFFFF;
  --background-color: #0c0b13;
  --error: #dd0000;
  --yellow-500: #ffd026;
}

body {
  background-color: var(--background-color);
  color: var(--white);
}

@media(max-width:1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width:720px) {
  html {
    font-size: 87.5%;
  }
}

body, input, textarea, select {
  font: 400 1rem 'Exo 2', sans-serif;
}

h1, h2, h3, h4, h5, button {
  font-family: 'Nova Flat', cursive;
}

button {
  cursor: pointer;
  background-color: var(--yellow-500);
  border: 0;
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

`;
