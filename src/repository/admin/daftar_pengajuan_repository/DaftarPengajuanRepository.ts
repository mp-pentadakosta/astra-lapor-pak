import Api from "@/core/api/api";
import {
    ConvertResponsePengajuanEntity,
    ResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";


export const DaftarPengajuanRepository = async ( page : number, limit : number ) : Promise<ResponsePengajuanEntity | null> => {
    const resp = await Api.get( `/admin/pengajuan?page=${ page }&limit=${ limit }` )
    if ( resp !== null ) {
        return ConvertResponsePengajuanEntity.toResponsePengajuanEntity( resp )
    }
    return null
}
