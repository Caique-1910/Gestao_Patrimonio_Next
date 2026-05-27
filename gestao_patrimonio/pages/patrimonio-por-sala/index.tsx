import Link from "next/link"
import Header from "../components/header/header"
import styles from "./patrimonio-por-sala.module.css"
import ListagemPatrimonio from "../components/listagem-patrimonio/listagem-patrimonio"

const PatrimonioPorSala = () => {
    return (
        <>
            <Header/>
          
            <main className={styles.pageContent}>
                <ListagemPatrimonio/>
            </main>
        </>
    )
}

export default PatrimonioPorSala