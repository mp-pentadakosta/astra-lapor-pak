import Api from "@/core/api/api";
import {ModelTambahPengajuanUser} from "@/view/after_login/user/daftar_pengajuan/model/ModelTambahPengajuanUser";


export const RepositoryAddPengajuan = async (data: ModelTambahPengajuanUser) => {
    const resp = await Api.post('/user/pengajuan', {
        "pengajuan_name": data.pengajuan_name,
        "deskripsi": data.deskripsi,
        "prioritas": data.prioritas,
        "foto": data.foto,
    })
    if (resp !== null) {
        return resp
    }
    return null;
}
