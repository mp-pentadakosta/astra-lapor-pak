import Api from "@/core/api/api";
import {
    ConvertResponseHistoryEntity,
    ResponseHistoryEntity
} from "@/repository/admin/history/entity/ResponseHistoryEntity";


export const RepositoryHistoryAtasan = async ( tglMulai : string, tglSelesai : string ) : Promise<ResponseHistoryEntity | null> => {
    const resp = await Api.post( '/atasan/pengajuan/report/list', {
        "tanggal_mulai" : tglMulai,
        "tanggal_selesai" : tglSelesai
    } )
    if ( resp !== null ) {
        return ConvertResponseHistoryEntity.toResponseHistoryEntity( resp )
    }
    return null
}
