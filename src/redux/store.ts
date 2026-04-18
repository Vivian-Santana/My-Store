import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root.reducer";
import logger from "redux-logger";

// o middleware é uma função que intercepta as ações antes de chegarem ao reducer, permitindo realizar tarefas adicionais, 
// como logging, manipulação assíncrona, etc. O logger é um middleware que registra as ações e o estado resultante no console, 
// facilitando a depuração.
export const store = createStore(rootReducer, applyMiddleware(logger));
