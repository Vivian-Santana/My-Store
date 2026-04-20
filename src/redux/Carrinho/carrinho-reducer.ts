// import { Product } from "../../Components/ListaDeProdutos/ListaDeProdutos";

//*** com redux core ***/

// interface CarrinhoState {
//     carrinho: Product[];
// }

// const estadoInicial: CarrinhoState = {
//     carrinho: [],
// }

// interface CarrinhoAction {
//     type: string;
//     payload?: Product;
// }

// export function carrinhoReducer(state = estadoInicial, action: CarrinhoAction): CarrinhoState {
//     switch(action.type){
//         case "carrinho/adicionar":
//             return {
//                 ...state,
//                 carrinho: [
//                     ...state.carrinho, 
//                     action.payload as Product //payload: adiciona o produto ao carrinho
//                 ],
//             };

//         case "carrinho/remover":
//             const removerProduto = action.payload as Product;
//             // novo carrinho é o mesmo carrinho do estado só que sem o produto a ser removido
//             const novoCarrinho = state.carrinho.filter(produto => produto.id !== removerProduto.id); //filtra o carrinho, removendo o produto com o id correspondente
            
//             return{
//                 ...state,
//                 carrinho: novoCarrinho,
//             };
//             default:
//                 return state;
//     }

// }

// export const removerProduto = (produto: Product) => ({
//   type: "carrinho/remover",
//   payload: produto
// });
