import React from "react";
import * as S from "./stylesCarrinho";

interface CarrinhoProps {
    mostrarCarrinho: boolean;
}

export const Carrinho: React.FC<CarrinhoProps> = ({ mostrarCarrinho }) => {
    return (
        <S.Container mostrarCarrinho={mostrarCarrinho}>
            <S.Title>
                Carrinho de Compras
            </S.Title>
        </S.Container>
    );
};
