import { useState } from "react";
import TabelaLocal from "../tabela-local/tabela-local";
import styles from "./listagem-local.module.css"
import Link from 'next/link';
import { useParams, usePathname } from "next/navigation";

type Localizacao = {
    localizacaoID: string,
    nomeLocal: string,
    usuarioID: string,
    nome: string
}

const ListagemLocal = () => {
    const [localizacao, setLocalizacao] = useState<Localizacao[]> ([]);

    const [pesquisa, setPesquisa] = useState<string>("")

    const params = useParams();
    const id = params?.id;

    const pathname = usePathname();

   

    return (
        <>
            {pathname  === "/lista-local/locais" ? (
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

            ) : pathname === `/lista-local/${id}` ? (
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

            ) : null}
           

            <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Responsável</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {localizacao.map((item) => (
                        
                        <TabelaLocal
                            key={item.localizacaoID}
                            localizacaoID={item.localizacaoID}
                            nomeLocal={item.nomeLocal}
                            usuarioID={item.usuarioID}
                            nome={item.nome}
                        />
                    ))
                    }
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


export default ListagemLocal;