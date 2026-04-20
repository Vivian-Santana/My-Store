import { combineReducers } from "redux";
import { usuarioSlice } from "./UsuarioReducer/usuario-slice";
import { carrinhoSlice } from "./Carrinho/carrinho.slice";

 // Aqui pode adicionar outros reducers, como produtosReducer, carrinhoReducer, etc.
export const rootReducer = combineReducers ({
    usuarioReducer: usuarioSlice.reducer,
    carrinhoReducer: carrinhoSlice.reducer,
});

//tipagem do RootReducer para usar no useSelector
export type RootReducer = ReturnType<typeof rootReducer>;

