import TabelaLocal from "../tabela-local/tabela-local";
import styles from "./listagem-local.module.css"
import Link from 'next/link';

const ListagemLocal = () => {
    return (
        <>
            <section
                className={`${styles.pageHeader} ${styles.layout_guide}`}
                aria-labelledby="titulo-ambientes"
            >
                <h1 id="titulo-ambientes">
                    Locais
                </h1>

                <form
                    className={styles.searchArea}
                    role="search"
                >
                    <label
                        htmlFor="pesquisa-ambiente"
                        className={styles.srOnly}
                    >
                        Pesquisar local
                    </label>

                    <input
                        type="search"
                        id="pesquisa-ambiente"
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o local"
                    />

                    <Link href="/modal">
                        <button type="button" className={styles.add_button} aria-label="Adicionar patrimônios">
                            <i className="fa-solid fa-plus" /> Patrimônio
                        </button>
                    </Link>

                    <button
                        type="button"
                        className={styles.filterButton}
                        aria-label="Filtrar ambientes"
                    >
                        <i className="fa-solid fa-sliders" />
                    </button>
                </form>
            </section>
            <TabelaLocal />
        </>
    )
}


export default ListagemLocal;