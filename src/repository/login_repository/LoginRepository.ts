import { RequestLoginEntity } from "@/repository/login_repository/entity/RequestLoginEntity";
import Api from "@/core/api/api";
import {
    ConvertResponseLoginEntity,
    ResponseLoginEntity
} from "@/repository/login_repository/entity/ResponseLoginEntity";


export const LoginRepository = async ( data : RequestLoginEntity ) : Promise<ResponseLoginEntity | null> => {
    const resp = await Api.post( '/auth/login', data );
    if ( resp !== null ) {
        return ConvertResponseLoginEntity.toResponseLoginEntity( resp )
    }
    return null;
}
