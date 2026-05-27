import styles from "./tabela-patrimonio.module.css"
import Link from "next/link";

const TabelaPatrimonio = () => {
    return(
        <>
            
                            <tr>
                                <td>1236808</td>

                                <td>
                                    MESA TRAPEZOIDAL DC-1987a
                                </td>

                                <td>Mesa</td>

                                <td>11/02/26</td>

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