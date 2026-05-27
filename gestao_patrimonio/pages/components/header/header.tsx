import { useEffect, useState } from "react";
import styles from "./header.module.css"
import Link from 'next/link';
import { listarLocalidades } from "@/pages/api/localService";
import { useRouter } from "next/router";

interface Localizacao {
    localizacaoID: number,
    nomeLocal: string,
    localSAP: string,
    descricaoSAP: string
}


const Header = () => {

    const [local, setLocais] = useState<Localizacao[]>([]);
    const [localSelecionado, setLocaisSelecionado] = useState<number>(1);

    const router = useRouter();

    async function listarLocais() {
        const lista = await listarLocalidades();
        setLocais(lista.data)
    }

    useEffect(() => {
        listarLocais();
    }, [router.isReady])

    return (
        <>
            <header className={styles.topbar}>
                <nav
                    className={`${styles.navbar} ${styles.layout_guide}`}
                    aria-label="Menu principal"
                >
                    <a
                        href="#"
                        className={styles.logoLink}
                        aria-label="Página inicial"
                    >
                        <img
                            src="/imgs/Logo Senai.png"
                            alt="Logo SENAI"
                            className={styles.logo}
                        />
                    </a>

                    <select className={styles.menuList} value={localSelecionado} onChange={(e) => setLocaisSelecionado(Number(e.target.value))}>
                        <option value="">
                            <Link href="/lista-local">
                                Locais
                            </Link>
                        </option>

                        {local.map((item) => (
                            <option
                                className={styles.option}
                                key={item.localizacaoID}
                                value={item.localizacaoID}
                            >
                                <Link
                                    href='/lista-local/'
                                >
                                    {item.nomeLocal}
                                    <i className="fa-solid fa-chevron-down" />
                                </Link>
                            </option>
                        ))}
                    </select>

                    <Link href="/patrimonio-por-sala" className={styles.menuLink}>
                        Patrimônios
                    </Link>


                    <section
                        className={styles.userArea}
                        aria-label="Informações do usuário"
                    >
                        <button
                            className={styles.userIcon}
                            aria-label="Abrir perfil do usuário"
                        >
                            <i className="fa-solid fa-user" />
                        </button>

                        <div className={styles.userInfo}>
                            <strong>Késsia Milena</strong>
                            <span>kessia@sp.senai.br</span>
                        </div>

                        <button
                            className={styles.arrowButton}
                            aria-label="Abrir opções da conta"
                        >
                            <img src="../imgs/chevron-down.png" alt="" />
                        </button>
                    </section>

                    <button
                        className={styles.hamburguer}
                        aria-label="Abrir opções de menu"
                    >
                        <i className="fa-solid fa-bars" />
                    </button>
                </nav>
            </header >
        </>
    )
}

export default Header;