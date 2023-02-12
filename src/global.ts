import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    #root {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        background-color: black;
        user-select: none;
    }
    
    body {
        overflow: hidden;
        margin: 0rem;
   
    }


`