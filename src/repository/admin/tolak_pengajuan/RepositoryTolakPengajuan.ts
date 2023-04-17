import Api from "@/core/api/api";


export const RepositoryTolakPengajuan = async ( id : number ) => {
    const resp = await Api.patch( `/admin/pengajuan/tolak/${ id }`, {} )
    if ( resp !== null ) {
        return resp;
    }
    return null;
}
