import Api from "@/core/api/api";
import {
    ConvertResponsePengajuanEntity,
    ResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";


export const DaftarPengajuanRepository = async ( page : number, limit : number, startDate: string, endDate:string ) : Promise<ResponsePengajuanEntity | null> => {
    const resp = await Api.get( `/admin/pengajuan?page=${ page }&limit=${ limit }&tanggal_mulai=${startDate}&tanggal_selesai=${endDate}` )
    if ( resp !== null ) {
        return ConvertResponsePengajuanEntity.toResponsePengajuanEntity( resp )
    }
    return null
}
