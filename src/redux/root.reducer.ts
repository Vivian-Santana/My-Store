import { combineReducers } from "redux";
import { usuarioReducer } from "./UsuarioReducer/reducer";
import { carrinhoReducer } from "./Carrinho/carrinho-reducer";

 // Aqui pode adicionar outros reducers, como produtosReducer, carrinhoReducer, etc.
export const rootReducer = combineReducers ({
    usuarioReducer, carrinhoReducer,
})

//tipagem do RootReducer para usar no useSelector
export type RootReducer = ReturnType<typeof rootReducer>;

