import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";

interface ContainerProps {
    mostrarCarrinho: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    z-index: 9999;
    right: ${(props) => props.mostrarCarrinho ? '0' : '-350px'};
    width: 350px;

    background-color: white;
    height: 100vh;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
    padding: 0;

    transition: right 0.3s ease-in-out; /* Animação suave para mostrar/esconder o carrinho */
    
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const ContainerHeaderCarrinho = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    margin: 0.5rem 0.5rem 0;
    border-bottom: 1px solid #c7c1c9;
`;

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
    padding:  0;
    list-style: none;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    flex: 1;
    overflow-y: auto;
`;

export const ProdutoItemCarrinho = styled.li`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    border-bottom: 1px solid #ccc;
    padding: 1.5rem;
    margin: 0;
`;

export const BtnFecharCarrinho = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 0.900rem;
    
    &:hover{
        cursor: pointer;
        color: red;
    }
`;

export const BtnExcluirProduto = styled.button`
    background-color: darkviolet;
    border: none;
    border-radius: 5px;
    padding: 0.2rem;
    cursor: pointer;
    margin-left: 1rem;
    margin-top: 1rem;
    color: white;
    width: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
`;

export const TotalCarrinho = styled.strong`
    display: flex;
    justify-content: center;
    align-itens:center;
    font-size: 1.2rem;
    padding: 1rem;
    border-top: 1px solid #ddd;
    font-weight: bold;
`;
