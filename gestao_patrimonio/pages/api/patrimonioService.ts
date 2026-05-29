import { api } from "./api";


export async function listarPatrimonio() {
    try{
        const response = await api.get("Patrimonio");

        const patrimonios = response.data

        return patrimonios;
    }
    catch(error:any){
        throw new Error(error.response.data);
    }
}



