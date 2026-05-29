import Header from "../components/header/header";
import ListagemLocal from "../components/listagem-local/listagem-local";
import styles from "./lista-local.module.css"


const ListaLocal = () => {

 
    return (
        <>
            <Header />
            <main className={`${styles.pageContent} ${styles.layout_guide}`}>
                <ListagemLocal 
                />
            </main>
        </>
    )
}

export default ListaLocal;