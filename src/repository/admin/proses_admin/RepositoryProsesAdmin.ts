import Api from "@/core/api/api";


export const RepositoryProsesAdmin = async ( id : number ) => {
    const resp = await Api.patch( `/admin/pengajuan/terima/${ id }`, {
        "tipe" : "Selesai"
    } );
    if ( resp !== null ) {
        return resp;
    }
    return null;
}
