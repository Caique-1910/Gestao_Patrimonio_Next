import styles from "./tabela-patrimonio.module.css"
import Link from "next/link";

interface Dados{
    patrimonioID: string,
    numeroPatrimonio:string,
    denominacao: string,
    dataTransferencia: string
}


const TabelaPatrimonio = ({patrimonioID, numeroPatrimonio, denominacao, dataTransferencia}:Dados) => {
    return(
        <>
            
                            <tr key={patrimonioID}>
                                <td>{numeroPatrimonio}</td>

                                <td>
                                    {denominacao}
                                </td>

                                <td>{dataTransferencia}</td>

                                

                                <td>
                                    <div className={styles.div_acoes}>

                                    <Link
                                        href="/detalhe-patrimonio"
                                        aria-label="Ver detalhes do patrimonio"
                                    >
                                        <i className="fa-solid fa-circle-info" />
                                    </Link>

                                    <Link href="transferir">
                                        <i className="fa fa-pencil"></i>
                                    </Link>
                                    </div>
                                    
                                </td>

                               
                                </tr>


        </>
    )
}

export default TabelaPatrimonio;