import React from "react";
import  * as S from "./stylesHeader";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Carrinho } from "../Carrinho/Carrinho";

export const Header: React.FC = () => {
    const [mostrarCarrinho, setMostrarCarrinho] = React.useState(false);
    const Logado = false; // Simulação de estado de autenticação
    
  return (
    <S.StyledHeader>
        <S.Wrapper>
            <S.HeaderTitulo>My Store.</S.HeaderTitulo>

            <S.BtnWrapper>
                <S.AutenticacaoBtn estaLogado={Logado}>
                    {Logado ? "Sair" : "Entrar"}
                    {Logado ? <FiLogOut /> : <FiLogIn />} {/* troca ícones */}
                </S.AutenticacaoBtn>

                <S.CarrinhoBtn onClick={() => setMostrarCarrinho(!mostrarCarrinho)}>
                    Carrinho
                    <FiShoppingCart />
                </S.CarrinhoBtn>
            </S.BtnWrapper>
        </S.Wrapper>

        <Carrinho mostrarCarrinho={mostrarCarrinho} />
    </S.StyledHeader>
  );
};