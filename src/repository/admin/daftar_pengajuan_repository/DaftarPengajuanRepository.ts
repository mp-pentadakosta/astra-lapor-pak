import Api from "@/core/api/api";
import {
    ConvertResponsePengajuanEntity,
    ResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";


export const DaftarPengajuanRepository = async () : Promise<ResponsePengajuanEntity | null> => {
    const resp = await Api.get( '/admin/pengajuan' )
    if ( resp !== null ) {
        return ConvertResponsePengajuanEntity.toResponsePengajuanEntity( resp )
    }
    return null
}
