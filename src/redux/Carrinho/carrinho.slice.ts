import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Components/ListaDeProdutos/ListaDeProdutos";

interface CarrinhoState {
    carrinho: Product[];
}

const initialState: CarrinhoState = {
    carrinho: []
};

export const carrinhoSlice = createSlice({
    initialState,
    name: 'carrinho',
    reducers:{
        addProduto: (state, action) => {
            state.carrinho = [
                ...state.carrinho,
                action.payload as Product
            ];
        },

        removerProduto: (state, action) =>{
            const removerProduto = action.payload as Product;
            
            // novo carrinho é o mesmo carrinho do estado só que sem o produto a ser removido
            const novoCarrinho = state.carrinho.filter(
                (produto) => produto.id !== removerProduto.id
            ); //filtra o carrinho, removendo o produto com o id correspondente
            
            state.carrinho = novoCarrinho;
        },
    }
});

export const {addProduto, removerProduto} = carrinhoSlice.actions;
