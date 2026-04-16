import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: black;
  
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1200px;
    margin: 0 auto;
    padding 0 2rem;
    height: 60px;
`;

export const HeaderTitulo = styled.h1`
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
`;

export const BtnWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const AutenticacaoBtn = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: green;
    color: white;
    font-weight: 0.7rem;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    svg {
        font-size: 0.8rem;
    }

    &:hover{
        cursor: pointer;
        background-color: darkgreen;
        font-weight: bold;
    }
`;

export const CarrinhoBtn = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: violet;
    color: black;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    svg {
        font-size: 0.8rem;
    }

    &:hover{
        cursor: pointer;
        background-color: darkviolet;
        color: white;
    }
`;

