import {
    ConvertResponseDetailEntity,
    ResponseDetailEntity
} from "@/repository/admin/detail_pengajuan_repository/entity/ResponseDetailEntity";
import Api from "@/core/api/api";


export const DetailPengajuanUserRepository = async ( id : number ) : Promise<ResponseDetailEntity | null> => {
    const resp = await Api.get( `/user/pengajuan/${ id }` )
    if ( resp !== null ) {
        return ConvertResponseDetailEntity.toResponseDetailEntity( resp )
    }
    return null
}
