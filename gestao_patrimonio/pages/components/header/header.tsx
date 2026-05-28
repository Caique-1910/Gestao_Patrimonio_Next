import { useEffect, useState } from "react";
import styles from "./header.module.css"
import Link from 'next/link';
import { listarLocalidades } from "@/pages/api/localService";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { login, puxarInformacoesUsuarioLogado } from "@/pages/api/authService";

interface Localizacao {
    localizacaoID: string,
    nomeLocal: string,
    localSAP: string,
    descricaoSAP: string
}

interface Usuario {
    usuarioID: string,
    email: string,
    nome: string
}


const Header = () => {

    const [local, setLocais] = useState<Localizacao[]>([]);
    const [localSelecionado, setLocaisSelecionado] = useState<string>("");

    const [usuario, setUsuario] = useState<Usuario | null>(null);

    const router = useRouter();
    const params = useParams();
    const id = params?.id;


    async function listarLocais() {
        const lista = await listarLocalidades();
        setLocais(lista.data)
    }

    const opcaoSelecionada = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {

        const id = event.target.value;

        setLocaisSelecionado(id);

        if (id !== "") {
            router.push(`/lista-local/${id}`);
        }
        else {
            router.push(`/lista-local/locais`)
        }
    }


    useEffect(() => {

        async function carregarUsuario() {
            listarLocais()
            try {

                const dadosUsuario =
                    await puxarInformacoesUsuarioLogado();

                setUsuario(dadosUsuario);

            } catch (error) {
                console.error(error);
            }
        }

        carregarUsuario();

    }, [router.isReady, id]);

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

                    <select className={styles.menuList} value={localSelecionado} onChange={opcaoSelecionada}>
                        <option value="locais">
                            <Link href="/lista-local/locais">
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
                                    href={`/lista-local/${item.localizacaoID}`}
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
                            <strong>{usuario?.nome}</strong>
                            <span>{usuario?.email}</span>
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