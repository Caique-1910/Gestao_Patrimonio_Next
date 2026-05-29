import { useEffect, useState } from "react";
import styles from "./header.module.css"
import Link from 'next/link';
import {  puxarInformacoesUsuarioLogado } from "@/pages/api/authService";

interface Usuario {
    usuarioID: string,
    email: string,
    nome: string
}


const Header = () => {


    const [usuario, setUsuario] = useState<Usuario | null>(null);


    useEffect(() => {

        async function carregarUsuario() {
            try {

                const dadosUsuario = await puxarInformacoesUsuarioLogado();
                setUsuario(dadosUsuario);

            } catch (error) {
                console.error(error);
            }
        }

        carregarUsuario();

    }, []);

    return (
        <>
            <header className={styles.topbar}>
                <nav
                    className={`${styles.navbar} ${styles.layout_guide}`}
                    aria-label="Menu principal"
                >
                    <a
                        href="/login"
                        className={styles.logoLink}
                        aria-label="Página inicial"
                    >
                        <img
                            src="/imgs/Logo Senai.png"
                            alt="Logo SENAI"
                            className={styles.logo}
                        />
                    </a>

                    
                    <Link href="/lista-local" className={styles.menuLink}>
                        Locais
                     </Link>
                       
                    <Link href="/aprovacao" className={styles.menuLink}>
                        Aprovações
                    </Link>

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
                            <strong key={usuario?.usuarioID}>{usuario?.nome}</strong>
                            <span key={usuario?.usuarioID}>{usuario?.email}</span>
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