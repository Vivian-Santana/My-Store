import React from "react";
import * as S from "./stylesCarrinho";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer} from "../../redux/root.reducer";
import { removerProduto } from "../../redux/Carrinho/carrinho-reducer";

interface CarrinhoProps {
    mostrarCarrinho: boolean;
}

export const Carrinho: React.FC<CarrinhoProps> = ({ mostrarCarrinho }) => {
    const {carrinho} = useSelector((rootReducer: RootReducer) => rootReducer.carrinhoReducer);
    const TotalCompras = carrinho.reduce((total, produto) => {
        return total + produto.price;
    }, 0).toFixed(2);

    const dispatch = useDispatch();

    return (
        <S.Container mostrarCarrinho={mostrarCarrinho}>

                <S.Title>
                    <S.IconeCarrinho />
                    Carrinho de Compras 
                </S.Title>
    
                <S.ListaDeProdutosCarrinho>
                    {carrinho.map(produto => (
                        <S.ProdutoItemCarrinho key={produto.id}>
                            <strong>{produto.title}</strong> - R$ {produto.price}
                            <S.BtnExcluirProduto onClick={() => dispatch(removerProduto(produto))}>
                                Remover
                            </S.BtnExcluirProduto>
                        </S.ProdutoItemCarrinho>
                    ))}

                </S.ListaDeProdutosCarrinho>

                <S.TotalCarrinho>
                    Total: R$ {TotalCompras}
                </S.TotalCarrinho>
        </S.Container>
    );
};
