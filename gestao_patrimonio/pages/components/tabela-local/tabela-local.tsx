import styles from "./tabela-local.module.css"

const TabelaLocal = () => {
    return(
        <>
             <section
                    className={`${styles.tableSection} ${styles.layout_guide}`}
                    aria-label="Lista de ambientes"
                >
                    <table className={styles.environmentTable}>
                        <thead>
                            <tr>
                                <th>Local</th>
                                <th>Responsável</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Sala 30/31 (anfiteatro)</td>

                                <td>Samanta Melissa</td>

                                <td>
                                    <a
                                        href="#"
                                        aria-label="Ver detalhes da Sala 30/31"
                                    >
                                        <i className="fa-solid fa-circle-info" />
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
        </>
    )
}

export default TabelaLocal;