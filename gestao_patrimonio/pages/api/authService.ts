import { api } from "./api";
import secureLocalStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

interface Usuario {
    usuarioID: string,
    nome: string,
    email: string
}

export async function login(nif: string, senha: string) {
    try {
        const response = await api.post("Autenticacao/login", { nif, senha });
        const token = response.data.token;

        secureLocalStorage.setItem("token", token);
    }
    catch (error: any) {
        throw new Error("Nif ou senha inválidos");
    }
}


export function puxarInformacoesUsuarioLogado() {

    const token = secureLocalStorage.getItem("token") as string;

    if (!token) return null;

    const usuario =
        jwtDecode<Usuario>(token);

    console.log(usuario)
    return usuario;
}