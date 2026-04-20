import { createSlice } from "@reduxjs/toolkit";

interface Usuario {
    nome: string;
    email: string;
}

interface UsuarioState {
    usuario: Usuario | null;
}

const estadoInicial: UsuarioState = {
    usuario: null,
}

export const usuarioSlice = createSlice({
    initialState: estadoInicial,
    name: "usuario",

    // dentro dos reducers estão as actions, cada action é um metodo
    reducers: {
        // primeira action: login
        login: (state, action) => {
            state.usuario = action.payload; // atualiza o estado do usuário com os dados do payload
        },

        logout: (state, action) => {
            state.usuario = null; // define o usuário como null para simular o logout
        }
    }

});

export const {login, logout} = usuarioSlice.actions;
