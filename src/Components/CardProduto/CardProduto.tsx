import * as S from "./stylesCardProduto";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export const CardProduto: React.FC = () => {
  return (
    <S.Card>
       <S.ProdutoImg src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="Produto" />

       <S.ProdutoNome>Nome do Produto</S.ProdutoNome>

         <S.ProdutoContainer>
           <S.ProdutoPreco>R$ 99,90</S.ProdutoPreco>
           <S.Avaliacoes>4,5 (100 avaliações)</S.Avaliacoes>
        </S.ProdutoContainer>

            <S.BtnWrapper>
                <S.BtnComprar>
                    Comprar
                    <FiShoppingCart />
                </S.BtnComprar>
            </S.BtnWrapper>
         
    </S.Card>
  );
}