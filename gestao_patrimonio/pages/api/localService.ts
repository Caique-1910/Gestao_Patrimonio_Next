import { api } from "./api";


export async function listarLocalidades() {
    try{
        const response = await api.get("Localizacao");
        return response;
    }
    catch(error:any){
        throw new Error(error.response.data);
    }
}



