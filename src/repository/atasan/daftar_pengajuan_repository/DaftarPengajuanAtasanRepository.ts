import Api from "@/core/api/api";
import {
    ConvertResponsePengajuanEntity,
    ResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";


export const DaftarPengajuanAtasanRepository = async ( page : number ) : Promise<ResponsePengajuanEntity | null> => {
    const resp = await Api.get( '/atasan/pengajuan?limit=10&page=' + page )
    if ( resp !== null ) {
        return ConvertResponsePengajuanEntity.toResponsePengajuanEntity( resp )
    }
    return null
}
