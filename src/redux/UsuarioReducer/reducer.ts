//*** com redux core ***/

// interface Usuario {
//     nome: string;
//     email: string;
// }

// interface UsuarioState {
//     usuario: Usuario | null;
// }

// const estadoInicial: UsuarioState = {
//     usuario: null,
// }

// interface usuarioAction {
//     type: string;
//     payload?: Usuario;
// }

// // o reducer precisa retornar o estado atualizado, ou seja, o estado anterior mais as mudanças
// export function usuarioReducer(state = estadoInicial, action: usuarioAction):

// UsuarioState {
//     // nome do reducer usuario + ação que ele vai tratar
//     if(action.type === "usuario/login"){
//             return {
//                 ...state, // mantém o estado anterior
//                 usuario: action.payload as Usuario, // atualiza o usuário com os dados do payload
//             };

//         } else if (action.type === "usuario/logout") {
//             return {
//                 ...state, // mantém o estado anterior
//                 usuario: null, // define o usuário como null para simular o logout
//             }  
//     }
//     return state;
// }
