import Api from "@/core/api/api";
import { ModelTerimaPengajuan } from "@/view/after_login/admin/detail_pengajuan/model/ModelTerimaPengajuan";


export const RepositoryTerimaPengajuan = async ( id : number, data : ModelTerimaPengajuan ) => {
    const resp = await Api.patch( `/admin/pengajuan/terima/${ id }`, {
        vendor_id : data.vendorId,
        tanggal_mulai : data.tanggalMulai,
        tanggal_selesai : data.tanggalSelesai,
        // harga : data.harga,
        tipe : data.tipe,
    } );
    if ( resp !== null ) {
        return resp;
    }
    return null;
}
