import Api from "@/core/api/api";
import { ModelSelesaiPengajaun } from "@/view/after_login/admin/detail_pengajuan/model/ModelSelesaiPengajaun";


export const RepositoryProsesAdmin = async ( id : number, data : ModelSelesaiPengajaun ) => {
    const resp = await Api.patch( `/admin/pengajuan/terima/${ id }`, {
        "tipe" : "Selesai",
        "file_bph" : data.bph,
        "komentar_selesai" : data.keterangan,
        "harga" : data.harga,
        "foto" : data.foto,
    } );
    if ( resp !== null ) {
        return resp;
    }
    return null;
}
