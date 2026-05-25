import Header from "../components/header/header";
import styles from "./detalhe-patrimonio.module.css";

const DetalhePatrimonio = () => {
    return (
        <>
            <Header />

            <main className={styles.pageContent}>
                <section
                    className={`${styles.pageDetalhes} ${styles.layoutGuide}`}
                    aria-labelledby="titulo-patrimonio"
                >
                    <a href="#" className={styles.backLink}>
                        <i className="fa-solid fa-arrow-left" />
                        Voltar
                    </a>

                    <h1 id="titulo-patrimonio">
                        Patrimônio: 1236808
                    </h1>

                    <article className={styles.patrimonioCard}>
                        <div className={styles.patrimonioContent}>
                            <dl>
                                <dt>Denominação</dt>
                                <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                            </dl>

                            <dl>
                                <dt>Tipo</dt>
                                <dd>Mesa</dd>
                            </dl>

                            <dl>
                                <dt>Data transferência</dt>

                                <dd>
                                    <time dateTime="2026-02-09">
                                        09/02/2026
                                    </time>
                                </dd>
                            </dl>

                            <dl>
                                <dt>Local Atual</dt>
                                <dd>Sala 09/10</dd>
                            </dl>

                            <dl>
                                <dt>Status Atual</dt>
                                <dd>Ativo</dd>
                            </dl>
                        </div>
                    </article>
                </section>

                <section
                    className={`${styles.tableSection} ${styles.layoutGuide}`}
                    aria-label="Lista de histórico do patrimônio"
                >
                    <h2>Histórico</h2>

                    <table className={styles.historyTable}>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Tipo de movimentação</th>
                                <th>Origem</th>
                                <th>Destino</th>
                                <th>Responsável</th>
                                <th>Justificativa</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td data-label="Data">
                                    11/02/2026
                                </td>

                                <td data-label="Tipo de movimentação">
                                    <span className={styles.statusBadge}>
                                        Transferência
                                    </span>
                                </td>

                                <td data-label="Origem">
                                    Sala 07/08
                                </td>

                                <td data-label="Destino">
                                    Sala 09/10
                                </td>

                                <td data-label="Responsável">
                                    Gustavo Lima
                                </td>

                                <td data-label="Justificativa">
                                    <a
                                        href="#"
                                        aria-label="Ver justificativa da transferência"
                                    >
                                        <i className="fa-solid fa-circle-info" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
};

export default DetalhePatrimonio;