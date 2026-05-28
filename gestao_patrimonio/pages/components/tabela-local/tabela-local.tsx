import { useRouter } from "next/router";
import styles from "./tabela-local.module.css"

type Dados = {
    localizacaoID : string,
    nomeLocal: string,
    usuarioID: string,
    nome: string
}

const TabelaLocal = ({ localizacaoID,nomeLocal, usuarioID, nome }: Dados) => {


    return (
        <>

            <tr>
                <td key={localizacaoID}>{nomeLocal}</td>

                <td key={usuarioID}>{nome}</td>

                <td>
                    <a
                        href="#"
                        aria-label="Ver detalhes da Sala 30/31"
                    >
                        <i className="fa-solid fa-circle-info" />
                    </a>
                </td>
            </tr>


        </>
    )
}

export default TabelaLocal;