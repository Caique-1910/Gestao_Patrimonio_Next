import { api } from "./api";
import secureLocalStorage from  "react-secure-storage" ; 


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