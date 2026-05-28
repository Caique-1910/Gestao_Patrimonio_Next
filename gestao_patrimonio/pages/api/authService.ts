import { api } from "./api";
import secureLocalStorage from  "react-secure-storage" ; 
import { jwtDecode } from "jwt-decode";

interface Usuario{
    usuarioID: string,
    nome: string,
    email: string
}

export async function login(nif: string, senha:string){
    try{
        const response = await api.post("Autenticacao/login", {nif, senha});
        // console.log("receba seu doce")
        // console.log(response)
        const token = response.data.token;

        secureLocalStorage.setItem("token", token);
    }
    catch(error:any){
        throw new Error("Nif ou senha inválidos");
    }
}

export async function puxarInformacoesUsuarioLogado() {

    const token = localStorage.getItem("token");

    if (!token) return null;

    const usuarioToken = jwtDecode<Usuario>(token);

    const response = await fetch(
         "https://localhost:7063/api/",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );

    if (!response.ok) {
        throw new Error(
            "Erro ao buscar usuário"
        );
    }

    const usuarioApi = await response.json();

    return {
        ...usuarioToken,
        ...usuarioApi
    };
}