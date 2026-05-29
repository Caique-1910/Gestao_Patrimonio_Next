import { useEffect, useState } from "react";
import TabelaPatrimonio from "../tabela-patrimonio/tabela-patrimonio";
import styles from "./listagem-patrimonio.module.css"
import { listarPatrimonio } from "@/pages/api/patrimonioService";
import Link from "next/link";

interface Dados {
    patrimonioID: string,
    numeroPatrimonio: string,
    denominacao: string,
    dataTransferencia: string
}


const ListagemPatrimonio = () => {
    const [patrimonio, setPatrimonio] = useState<Dados[]>([]);
    const [pesquisa, setPesquisa] = useState<string>("")
    const [paginaAtual, setPaginaAtual] = useState<number>(1);

    const itensPorPagina = 70;

    const indiceUltimoItem = paginaAtual * itensPorPagina;

    const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;



    const patrimoniosFiltrados = patrimonio.filter(
        (patrimonio) => {

            return patrimonio.denominacao
                .toLowerCase()
                .includes(
                    pesquisa.toLowerCase()
                );
        }
    );

    const patrimoniosPaginados =
        patrimoniosFiltrados.slice(
            indicePrimeiroItem,
            indiceUltimoItem
        );

    const totalPaginas = Math.ceil(
        patrimoniosFiltrados.length /
        itensPorPagina
    );

    async function listar() {
        try {
            const lista = await listarPatrimonio();
            setPatrimonio(lista);
        }
        catch (error: any) {
            console.log(error.message);
        }
    }



    useEffect(() => {
        listar()
    }, [])

    return (
        <>
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
                        placeholder="Pesquise o patrimonio"
                        value={pesquisa}
                        onChange={(e) => { setPesquisa(e.target.value) }}
                    />

                        <Link href="/modal">
                        <button type="button" className={styles.add_button} aria-label="Adicionar patrimônios">
                            <i className="fa-solid fa-plus" /> Patrimônio
                        </button>
                    </Link>

                    <button
                        type="button"
                        className={styles.filterButton}
                        aria-label="Filtrar patrimonios"
                    >
                        <i className="fa-solid fa-sliders" />
                    </button>
                </form>

            </section>
            <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Patrimônio</th>
                        <th>Denominação</th>
                        <th>Data transfêrencia</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {patrimoniosPaginados.length > 0 ? (
                        patrimoniosPaginados.map((item) => (

                            <TabelaPatrimonio
                                key={item.patrimonioID}
                                patrimonioID={item.patrimonioID}
                                denominacao={item.denominacao}
                                dataTransferencia={item.dataTransferencia}
                                numeroPatrimonio={item.numeroPatrimonio}
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

export default ListagemPatrimonio;