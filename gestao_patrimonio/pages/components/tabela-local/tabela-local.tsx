import { useRouter } from "next/router";
import styles from "./tabela-local.module.css"

type Dados = {
    localizacaoID: string,
    nomeLocal: string,
    usuarioID: string,
    nome: string,
    areaID: string,
    nomeArea: string
}

const TabelaLocal = ({ localizacaoID, nomeLocal, usuarioID, nome, areaID, nomeArea }: Dados) => {

    

    return (
        <>

            <tr>
                <td key={localizacaoID}>{nomeLocal}</td>

                <td key={areaID}>{nomeArea}</td>

                <td key={usuarioID}>{nome}</td>


            </tr>


        </>
    )
}

export default TabelaLocal;