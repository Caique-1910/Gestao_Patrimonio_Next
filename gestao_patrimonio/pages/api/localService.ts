import { api } from "./api";


export async function listarLocalidades() {
    try{
        const response = await api.get("Localizacao");

        const localizacoes = response.data

        return localizacoes;
    }
    catch(error:any){
        throw new Error(error.response.data);
    }
}




