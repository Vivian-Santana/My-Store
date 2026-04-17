import * as S from "./stylesCardProduto";
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../ListaDeProdutos/ListaDeProdutos";
import { FaRegStar,  FaStar} from "react-icons/fa";

export type Props = {
  product: Product;
};

export const CardProduto: React.FC<Props> = ({ product }) => {
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
                <S.BtnComprar>
                    Comprar
                    <FiShoppingCart />
                </S.BtnComprar>
            </S.BtnWrapper>
         
    </S.Card>
  );
}
