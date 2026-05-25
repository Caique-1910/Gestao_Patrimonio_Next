import styles from "./login.module.css"

const Login = () => {
    return (
        <>
            <main className={styles.loginPage}>
                <section
                    className={styles.loginBanner}
                    aria-label="Apresentação do sistema"
                >
                    <img
                        src="/imgs/Imagem do login.png"
                        alt="Imagem de fundo relacionada à tecnologia"
                        className={styles.bannerImage}
                    />

                    <div className={styles.bannerOverlay} />

                    <div className={styles.bannerContent}>
                        <img
                            src="/imgs/Logo Senai.png"
                            alt="Logo do SENAI"
                            className={styles.senaiLogo}
                        />

                        <h2>Gestão de patrimônios</h2>

                        <p className={styles.bannerContentText}>
                            Controle, organização e transparência do patrimônio com eficiência.
                        </p>
                    </div>
                </section>

                <section
                    className={styles.loginArea}
                    aria-label="Formulário de login"
                >
                    <form className={styles.loginForm}>
                        <h1>Login</h1>

                        <div className={styles.formGroup}>
                            <label htmlFor="nif">NIF:</label>

                            <input
                                type="text"
                                id="nif"
                                name="nif"
                                placeholder="Insira o seu NIF"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="senha">Senha:</label>

                            <div className={styles.passwordField}>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Insira a sua senha"
                                    required
                                />

                                <button
                                    type="button"
                                    className={styles.showPassword}
                                    aria-label="Mostrar senha"
                                >
                                    👁
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={styles.loginButton}
                        >
                            Entrar
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Login