import TabelaPatrimonio from "../tabela-patrimonio/tabela-patrimonio";
import styles from "./listagem-patrimonio.module.css"

type Localizacao = {
    nomeLocal: string,
    usuarioID: number
}


const ListagemPatrimonio = () => {


    return (
        <>
            <section
                className={`${styles.pageHeader} ${styles.layout_guide}`}
                aria-labelledby="titulo-patrimonios"
            >
                <h1 id="titulo-patrimonios">
                    Patrimônios: Sala 09/10
                </h1>

                <form
                    className={styles.searchArea}
                    role="search"
                >
                    <label
                        htmlFor="pesquisa-ambiente"
                        className={styles.srOnly}
                    >
                        Pesquisar patrimônios
                    </label>

                    <input
                        type="search"
                        id="pesquisa-ambiente"
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o local"
                    />

                    <button
                        type="button"
                        className={styles.filterButton}
                        aria-label="Filtrar patrimonios"
                    >
                        <i className="fa-solid fa-sliders" />
                    </button>
                </form>

            </section>
            <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Patrimônio</th>
                        <th>Denominação</th>
                        <th>Data transfêrencia</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    <TabelaPatrimonio/>
                </tbody>
            </table>

            <nav
                className={styles.pagination}
                aria-label="Paginação"
            >
                <button
                    type="button"
                    className={styles.paginationButton}
                    aria-label="Página anterior"
                >
                    ‹
                </button>

                <a
                    href="#"
                    className={`${styles.paginationLink} ${styles.current}`}
                    aria-current="page"
                >
                    1
                </a>

                <a
                    href="#"
                    className={styles.paginationLink}
                >
                    2
                </a>

                <a
                    href="#"
                    className={styles.paginationLink}
                >
                    3
                </a>

                <button
                    type="button"
                    className={styles.paginationButton}
                    aria-label="Próxima página"
                >
                    ›
                </button>
            </nav>

        </>
    )
}

export default ListagemPatrimonio;