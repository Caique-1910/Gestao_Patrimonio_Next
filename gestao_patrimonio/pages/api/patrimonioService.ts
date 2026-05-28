interface Patrimonio{
    patrimonioID: string,
    nomePatrimonio: string,
    localizacaoID: string
}



export function filtrarPatrimoniosPorLocal(
    patrimonios: Patrimonio[],
    localizacaoID: string
) {

    return patrimonios.filter(
        (patrimonio) =>
            patrimonio.localizacaoID ===
            localizacaoID
    );
}