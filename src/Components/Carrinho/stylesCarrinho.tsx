import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";

interface ContainerProps {
    mostrarCarrinho: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => props.mostrarCarrinho ? '0' : '-350px'};
    width: 350px;

    background-color: white;
    height: 100vh;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
    padding: 2rem;

    transition: right 0.3s ease-in-out; /* Animação suave para mostrar/esconder o carrinho */
`

export const Title = styled.h1`
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    color: darkviolet;
`;

export const IconeCarrinho = styled(FiShoppingCart)`
  color: darkviolet;
  font-size: 26px;

`;

export const ListaDeProdutosCarrinho = styled.ul`
    padding:  2rem 0;
    list-style: none;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

export const ProdutoItemCarrinho = styled.li`
    font-size: 1rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;

`

export const TotalCarrinho = styled.strong`
    font-size: 1.2rem;
`

export const BtnExcluirProduto = styled.button`
    background-color: transparent;
    border: 2px solid red;
    border-radius: 5px;
    padding: 0 0.5rem;
    cursor: pointer;
    margin-left: 1rem;

    &:hover {
        background-color: darkred;
        color: white;
    }
`

export const BotaoFecharCarrinho = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
`
