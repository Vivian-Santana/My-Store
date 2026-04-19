import * as S from "./stylesCardProduto";
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../ListaDeProdutos/ListaDeProdutos";
import { FaRegStar,  FaStar} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root.reducer";
import { removerProduto } from "../../redux/Carrinho/carrinho-reducer";

export type Props = {
  produto: Product;
};

export const CardProduto: React.FC<Props> = ({ produto }) => {
  const { carrinho } = useSelector((rootReducer: RootReducer) => rootReducer.carrinhoReducer); //acesso ao estado do carrinho
  const dispatch = useDispatch();
  
  //verifica se o produto já está no carrinho, retornando true ou false
  const produtoEstaNoCarrinho = carrinho
  .find((produtoNoCarrinho) => produto.id === produtoNoCarrinho.id) !== undefined;

  function adicionarAoCarrinho(){
    dispatch({
      type: "carrinho/adicionar",
      payload: produto, //payload: adiciona o produto ao carrinho
    });
  }

  return (
    <S.Card>
       <S.ProdutoImg src={produto.image} alt="Foto do Produto" />

       <S.ProdutoNome>{produto.title}</S.ProdutoNome>

         <S.ProdutoContainer>
           <S.ProdutoPreco>R$ {produto.price.toFixed(2)}</S.ProdutoPreco>
            
            {/* Exibindo as avaliações como estrelas */}
           <S.Avaliacoes>
            { Array.from({ length: 5 }).map((_, index) => 
              index < Math.round(produto.rating.rate) ? 
                <FaStar key={index} color="gold" /> : <FaRegStar key={index} color="gold" />
              )}
            {produto.rating.rate} ({produto.rating.count} avaliações)
           </S.Avaliacoes>
        </S.ProdutoContainer>

            <S.BtnWrapper>
              { produtoEstaNoCarrinho? (
                <S.BtnRemover onClick={() => dispatch(removerProduto(produto))}>
                    Remover do Carrinho
                    <FiShoppingCart />
                </S.BtnRemover>
              ) : (
                <S.BtnComprar onClick={adicionarAoCarrinho}>
                    Comprar
                    <FiShoppingCart />
                </S.BtnComprar>
              )}
            </S.BtnWrapper>
    </S.Card>
  );
}
