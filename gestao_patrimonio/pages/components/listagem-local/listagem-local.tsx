import { useEffect, useState } from "react";
import TabelaLocal from "../tabela-local/tabela-local";
import styles from "./listagem-local.module.css"
import Link from 'next/link';
import { listarLocalidades } from "@/pages/api/localService";


interface Local {
    localizacaoID: string,
    nomeLocal: string,
    usuarioID: string,
    nome: string,
    areaID: string
    nomeArea: string
}

const ListagemLocal = () => {
    const [localizacao, setLocalizacao] = useState<Local[]>([]);

    const [pesquisa, setPesquisa] = useState<string>("");


    async function listar() {
        try {
            const lista = await listarLocalidades();
            setLocalizacao(lista);
        }
        catch (error: any) {
            console.log(error.message);
        }
    }

    const [paginaAtual, setPaginaAtual] = useState<number>(1);

    const itensPorPagina = 70;

    const indiceUltimoItem = paginaAtual * itensPorPagina;

    const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;



    const locaisFiltrados = localizacao.filter(
        (localizacao) => {

            return localizacao.nomeLocal
                .toLowerCase()
                .includes(
                    pesquisa.toLowerCase()
                );
        }
    );

    const locaisPaginados =
        locaisFiltrados.slice(
            indicePrimeiroItem,
            indiceUltimoItem
        );

    const totalPaginas = Math.ceil(
        locaisFiltrados.length /
        itensPorPagina
    );


    useEffect(() => {
        listar();
    }, [])



    return (
        <>

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
                        value={pesquisa}
                        onChange={(e) => { setPesquisa(e.target.value) }}
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o local"
                    />

                

                    <button
                        type="button"
                        className={styles.filterButton}
                        aria-label="Filtrar ambientes"
                    >
                        <i className="fa-solid fa-sliders" />
                    </button>
                </form>
            </section>

            <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Área</th>
                        <th>Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    {locaisPaginados.length > 0 ? (
                        locaisPaginados.map((item) => (

                            <TabelaLocal
                             key={item.localizacaoID}
                            localizacaoID={item.localizacaoID}
                            nomeLocal={item.nomeLocal}
                            usuarioID={item.usuarioID}
                            nome={item.nome}
                            areaID={item.areaID}
                            nomeArea={item.nomeArea}
                            />

                        ))
                    ) : null} 
                   

                </tbody>

            </table>


            <nav
                className={styles.pagination}
                aria-label="Paginação"
            >

                <button
                    type="button"
                    className={styles.paginationButton}
                    disabled={paginaAtual === 1}
                    onClick={() =>
                        setPaginaAtual(
                            paginaAtual - 1
                        )
                    }
                >
                    ‹
                </button>

                {[...Array(totalPaginas)].map(
                    (_, index) => {

                        const numeroPagina =
                            index + 1;

                        return (

                            <button
                                key={numeroPagina}
                                type="button"
                                className={
                                    paginaAtual === numeroPagina
                                        ? `${styles.paginationLink} ${styles.current}`
                                        : styles.paginationLink
                                }
                                onClick={() =>
                                    setPaginaAtual(
                                        numeroPagina
                                    )
                                }
                            >
                                {numeroPagina}
                            </button>
                        );
                    }
                )}

                <button
                    type="button"
                    className={styles.paginationButton}
                    disabled={
                        paginaAtual === totalPaginas
                    }
                    onClick={() =>
                        setPaginaAtual(
                            paginaAtual + 1
                        )
                    }
                >
                    ›
                </button>

            </nav>
        </>
    )
}


export default ListagemLocal;