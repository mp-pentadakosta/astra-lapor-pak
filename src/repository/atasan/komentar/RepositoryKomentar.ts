import Api from "@/core/api/api";


export const RepositoryKomentar = async ( id : number, komentar : string ) => {
    const resp = await Api.patch( `/atasan/pengajuan/komentar/${ id }`, {
        "komentar" : komentar,
    } )
    if ( resp !== null ) {
        return resp
    }
    return null
}
