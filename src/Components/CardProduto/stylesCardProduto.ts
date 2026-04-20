import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;

export const ProdutoImg = styled.img`
    width: 250px;
    height: 300px;
    margin: 0 1rem;

    object-fit: contain;
`;

export const ProdutoNome = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
`;

export const ProdutoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

export const Avaliacoes = styled.span`
    display: flex;
    font-size: 0.7rem;
    gap: 0.2rem;
    
    svg{
        font-size: 1rem;
    }
`;

export const ProdutoPreco = styled.strong``;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 1rem;
`;

export const BtnComprar = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    width: 100%;
    background-color: blue;
    color: white;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    svg {
        font-size: 0.8rem;
    }
`;

export const BtnRemover = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    width: 100%;
    background-color: darkviolet;
    color: white;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    svg {
        font-size: 0.8rem;
    }
`;
