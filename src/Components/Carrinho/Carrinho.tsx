import React from "react";
import * as S from "./stylesCarrinho";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer} from "../../redux/root.reducer";
import { removerProduto } from "../../redux/Carrinho/carrinho.slice";
import { IoClose } from "react-icons/io5";
import { BsTrash3Fill } from "react-icons/bs";

interface CarrinhoProps {
    mostrarCarrinho: boolean;
    fecharCarrinho: () => void;
}

export const Carrinho: React.FC<CarrinhoProps> = ({ mostrarCarrinho, fecharCarrinho }) => {
    
    const {carrinho} = useSelector((rootReducer: RootReducer) => rootReducer.carrinhoReducer);
    const TotalCompras = carrinho.reduce((total, produto) => {
        return total + produto.price;
    }, 0).toFixed(2);

    const dispatch = useDispatch();

    return (
        <S.Container mostrarCarrinho={mostrarCarrinho}>

                <S.ContainerHeaderCarrinho>
                    <S.BtnFecharCarrinho onClick={fecharCarrinho}>
                        <IoClose />     
                    </S.BtnFecharCarrinho>
                    
                    <S.IconeCarrinho />
                    <S.Title>Carrinho de Compras </S.Title>

                </S.ContainerHeaderCarrinho>

                <S.ListaDeProdutosCarrinho>
                    {carrinho.map(produto => (
                        <S.ProdutoItemCarrinho key={produto.id}>
                            <strong>{produto.title}</strong> R$ {produto.price}
                            <S.BtnExcluirProduto onClick={() => dispatch(removerProduto(produto))}>
                                Remover item
                                <BsTrash3Fill />
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
