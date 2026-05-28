import { useParams } from "next/navigation";
import Header from "../../components/header/header";
import ListagemLocal from "../../components/listagem-local/listagem-local";
import styles from "./lista-local.module.css"
import { useEffect } from "react";
import { useRouter } from "next/router";

const ListaLocal = () => {

    const params = useParams();
    const id = params?.id;

    const router = useRouter();

    useEffect(() => {

    }, [router.isReady,id])


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