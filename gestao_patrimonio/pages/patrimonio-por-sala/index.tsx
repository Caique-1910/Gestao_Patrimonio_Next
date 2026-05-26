import Link from "next/link"
import Header from "../components/header/header"
import styles from "./patrimonio-por-sala.module.css"

const PatrimonioPorSala = () => {
    return (
        <>
            <Header/>
          
            <main className={styles.pageContent}>

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
                            placeholder="Pesquise o ambiente"
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

                <section
                    className={`${styles.tableSection} ${styles.layout_guide}`}
                    aria-label="Lista de patrimonios"
                >
                    <table className={styles.environmentTable}>
                        <thead>
                            <tr>
                                <th>Patrimônio</th>
                                <th>Denominação</th>
                                <th>Tipo</th>
                                <th>Data transfêrencia</th>
                                <th>Detalhes</th>
                                <th>Transferir</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1236808</td>

                                <td>
                                    MESA TRAPEZOIDAL DC-1987a
                                </td>

                                <td>Mesa</td>

                                <td>11/02/26</td>

                                <td>
                                    <Link
                                        href="/detalhe-patrimonio"
                                        aria-label="Ver detalhes do patrimonio"
                                    >
                                        <i className="fa-solid fa-circle-info" />
                                    </Link>
                                </td>

                                <td>
                                    <a
                                        href="#"
                                        aria-label="Transferir patrimonio"
                                    >
                                        <i className="fa-solid fa-arrow-right-arrow-left" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>

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
            </main>
        </>
    )
}

export default PatrimonioPorSala