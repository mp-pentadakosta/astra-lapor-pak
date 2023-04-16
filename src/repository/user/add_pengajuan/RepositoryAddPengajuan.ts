import Api from "@/core/api/api";
import { ModelAddPengajuan } from "@/view/after_login/user/daftar_pengajuan/model/ModelAddPengajuan";


export const RepositoryAddPengajuan = async ( data : ModelAddPengajuan ) => {
    const resp = await Api.post( '/user/pengajuan', {
        "pengajuan_name" : data.namaPengajuan,
        "deskripsi" : data.deskripsi,
        "prioritas" : data.prioritas,
        "foto" : data.foto.map( ( item : string ) => {
            return {
                "image" : item
            }
        } ),
    } )
    return null;
}
