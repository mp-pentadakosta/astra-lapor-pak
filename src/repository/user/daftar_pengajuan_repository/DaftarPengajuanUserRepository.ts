import Api from "@/core/api/api";
import {
    ConvertResponsePengajuanEntity,
    ResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";


export const DaftarPengajuanUserRepository = async () : Promise<ResponsePengajuanEntity | null> => {
    const resp = await Api.get( '/user/pengajuan' )
    if ( resp !== null ) {
        return ConvertResponsePengajuanEntity.toResponsePengajuanEntity( resp )
    }
    return null
}
