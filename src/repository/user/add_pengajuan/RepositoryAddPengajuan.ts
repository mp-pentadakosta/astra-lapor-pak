import Api from "@/core/api/api";
import { ModelAddPengajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelAddPengajuan";


export const RepositoryAddPengajuan = async ( data : ModelAddPengajuan ) => {
    const resp = await Api.post( '/user/pengajuan', {
        "pengajuan_name" : "string",
        "deskripsi" : "string",
        "prioritas" : "string",
        "foto" : [],
    } )
    return null;
}
