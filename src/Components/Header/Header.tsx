import React from "react";
import  * as S from "./stylesHeader";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Carrinho } from "../Carrinho/Carrinho";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root.reducer";

export const Header: React.FC = () => {
    const usuario = useSelector((rootReducer: RootReducer) => rootReducer.usuarioReducer.usuario);
    const dispatch = useDispatch();

    const [mostrarCarrinho, setMostrarCarrinho] = React.useState(false);
    const Logado = usuario !== null; // Simulação de estado de autenticação

    function handleAutenticacao() {
        if (usuario === null) {
            //despachar a action de login
            dispatch({ 
                type: "usuario/login", 
                payload: { 
                    nome: "Maria da Silva", 
                    email: "maria.silva@example.com" 
                },
            });
        } else {
            //despachar a action de logout
            dispatch({ 
                type: "usuario/logout",
            });
        }
    }

  return (
    <S.StyledHeader>
        <S.Wrapper>
            <S.HeaderTitulo>My Store.</S.HeaderTitulo>

            <S.BtnWrapper>
                <S.AutenticacaoBtn estaLogado={Logado} onClick={handleAutenticacao}>
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