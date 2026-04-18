import * as S from "./stylesCardProduto";
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../ListaDeProdutos/ListaDeProdutos";
import { FaRegStar,  FaStar} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root.reducer";

export type Props = {
  product: Product;
};

export const CardProduto: React.FC<Props> = ({ product }) => {
  const { carrinho } = useSelector((rootReducer: RootReducer) => rootReducer.carrinhoReducer); //acesso ao estado do carrinho
  const dispatch = useDispatch();
  
  //verifica se o produto já está no carrinho, retornando true ou false
  const produtoEstaNoCarrinho = carrinho
  .find((produtoNoCarrinho) => product.id === produtoNoCarrinho.id) !== undefined;

  function adicionarAoCarrinho(){
    dispatch({
      type: "carrinho/adicionar",
      payload: product, //payload: adiciona o produto ao carrinho
    });
  }

  function removerProdutoDoCarrinho(){
    dispatch({
      type: "carrinho/remover",
      payload: product, //payload: remove o produto do carrinho
    });
  }

  return (
    <S.Card>
       <S.ProdutoImg src={product.image} alt="Foto do Produto" />

       <S.ProdutoNome>{product.title}</S.ProdutoNome>

         <S.ProdutoContainer>
           <S.ProdutoPreco>R$ {product.price.toFixed(2)}</S.ProdutoPreco>
            
            {/* Exibindo as avaliações como estrelas */}
           <S.Avaliacoes>
            { Array.from({ length: 5 }).map((_, index) => 
              index < Math.round(product.rating.rate) ? 
                <FaStar key={index} color="gold" /> : <FaRegStar key={index} color="gold" />
              )}
            {product.rating.rate} ({product.rating.count} avaliações)
           </S.Avaliacoes>
        </S.ProdutoContainer>

            <S.BtnWrapper>
              { produtoEstaNoCarrinho? (
                <S.BtnRemover onClick={removerProdutoDoCarrinho}>
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
