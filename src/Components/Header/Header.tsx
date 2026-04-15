import  * as S from "./stylesHeader";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
        <S.Wrapper>
            <S.HeaderTitulo>My Store.</S.HeaderTitulo>

            <S.BtnWrapper>
                <S.AutenticacaoBtn>
                    Login
                    <FiLogIn />
                </S.AutenticacaoBtn>
                <S.CarrinhoBtn>
                    Carrinho
                    <FiShoppingCart />
                </S.CarrinhoBtn>
            </S.BtnWrapper>
        </S.Wrapper>
    </S.StyledHeader>
  );
};