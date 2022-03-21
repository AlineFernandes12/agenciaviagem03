import styled from 'styled-components';

export const ContatoContainer = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        font-size: 2rem;
        margin: 5rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 500px;
    }

    label {
        font-size: 1.5rem;
        font-weight: bold;
    }

    input {
        height: 35px;
        margin: 1rem 0;
        border-radius: 3px;
        border: none;
        outline: none;
    }

    button {
        height: 45px;
        background-color: rgb(42 21 177 / 62%);
        border: none;
        border-radius: 3px;
        font-weight: bold;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;

        &:hover {
        background-color: rgb(42 21 177 / 87%);

        }
    }

    a {
        margin: 1rem 0;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        height: 45px;
        background-color: rgb(42 21 177 / 62%);
        border: none;
        border-radius: 3px;
        font-weight: bold;
        font-size: 1.5rem;
        color: white;

        &:hover {
        background-color: rgb(42 21 177 / 87%);

        }
    }
`