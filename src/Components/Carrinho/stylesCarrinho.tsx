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

export const Title = styled.h2`
    font-size: 1.5rem;
`;