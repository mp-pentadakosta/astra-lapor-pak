import Api from "@/core/api/api";


export const RepositoryTolakPengajuan = async ( id : number, reason: string ) => {
    const resp = await Api.patch( `/admin/pengajuan/tolak/${ id }`, {
        "komentar_ditolak": reason
    } )
    if ( resp !== null ) {
        return resp;
    }
    return null;
}
