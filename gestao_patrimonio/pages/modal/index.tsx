import styles from "./modal.module.css"

const Modal = () => {
    return (
        <>
            <section className={styles.modalOverlay}>
                <article
                    className={styles.modalContainer}
                    id="modalImportar"
                >
                    <a
                        href="#"
                        className={styles.modalClose}
                    >
                        x
                    </a>

                    <h1 className={styles.modalTitle}>
                        Importar novos patrimônios
                    </h1>

                    <form className={styles.modalForm}>

                        <div className={styles.modalField}>
                            <label htmlFor="numeroPatrimonio">
                                Número do patrimônio
                            </label>

                            <input
                                type="text"
                                id="numeroPatrimonio"
                                placeholder="1245769"
                            />
                        </div>

                        <div className={styles.modalField}>
                            <label htmlFor="denominacaoPatrimonio">
                                Denominação
                            </label>

                            <input
                                type="text"
                                id="denominacaoPatrimonio"
                                placeholder="CADEIRA GIRATÓRIA EM POLIPROPILENO PRETO"
                            />
                        </div>

                        <button className={styles.modalButton}>
                            SALVAR IMPORTAÇÃO
                        </button>
                    </form>
                </article>
            </section>

            {/* MODAL TRANSFERIR */}

            <section className={styles.modalOverlay}>
                <article
                    className={styles.modalContainer}
                    id="modalTransferir"
                >
                    <a
                        href="#"
                        className={styles.modalClose}
                    >
                        x
                    </a>

                    <h1 className={styles.modalTitle}>
                        Transferir os patrimônios
                    </h1>

                    <form className={styles.modalForm}>

                        <div className={styles.modalField}>
                            <label htmlFor="ambienteTransferencia">
                                Ambiente
                            </label>

                            <select id="ambienteTransferencia">
                                <option>Manutenção</option>
                                <option>Sala XX</option>
                                <option>Sala XX</option>
                            </select>
                        </div>

                        <div className={styles.modalField}>
                            <label htmlFor="motivoTransferencia">
                                Motivo da transferência
                            </label>

                            <textarea
                                id="motivoTransferencia"
                                placeholder="Lorem"
                                defaultValue=""
                            />
                        </div>

                        <button className={styles.modalButton}>
                            TRANSFERIR
                        </button>
                    </form>
                </article>
            </section>

            {/* MODAL JUSTIFICATIVA */}

            <section className={styles.modalOverlay}>
                <article
                    className={`${styles.modalContainer} ${styles.modalJustificativa}`}
                >
                    <a
                        href="#"
                        className={styles.modalClose}
                    >
                        x
                    </a>

                    <h1 className={styles.modalTitle}>
                        Justificativa
                    </h1>

                    <p className={styles.modalText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis, quasi distinctio! Temporibus similique expedita
                        laboriosam, assumenda officia veritatis amet doloremque esse
                        obcaecati repudiandae architecto in sed facilis quas harum.
                    </p>
                </article>
            </section>
        </>
    )
}

export default Modal;