import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: black;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    @media (max-width: 1189px) and (min-width: 200px) {
        width: 100%;
    }

    @media (max-width: 424px) and (min-width: 200px) {
        min-height: 95px;
        display: flex;
        justify-content: espace-everly;
        padding-top: 1rem;
    }
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

     @media (max-width: 1189px) and (min-width: 200px) {
        margin-left: 2rem;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 1189px) and (min-width: 200px) {
        margin-right: 2rem;
    }

    @media (max-width: 424px) and (min-width: 200px) {
        display: flex;
        justify-content: end;
        flex-wrap: wrap;
        margin-right: 2rem;
        gap: 0.5rem;
    }
`;

// Props para o botão de autenticação, indicando se o usuário está logado ou não
interface BtnProps {
    estaLogado: boolean;
}

export const AutenticacaoBtn = styled.button<BtnProps>`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: ${(props) => props.estaLogado ? 'red' : 'green'}; /* Cor muda com base no estado de autenticação */
    color: white;
    font-weight: 0.7rem;

    display: flex;
    align-items: center;
    gap: 0.6rem;

    svg {
        font-size: 0.8rem;
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
`;

// escurece a tela quando o carrinho é aberto e impede sobreposição de elementos sobre ele o fechando quando clica na página.
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 9998;

  pointer-events: all;
`;
