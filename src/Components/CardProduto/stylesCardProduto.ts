import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;

`;

export const ProdutoImg = styled.img`
    width: 90%;
`;

export const ProdutoNome = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

export const ProdutoContainer = styled.div`
    display: flex;
    flex-direction: space-between;
    align-items: center;
`;

export const Avaliacoes = styled.span``;

export const ProdutoPreco = styled.strong``;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const BtnComprar = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: blue;
    color: white;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    svg {
        font-size: 0.8rem;
    }
`;
