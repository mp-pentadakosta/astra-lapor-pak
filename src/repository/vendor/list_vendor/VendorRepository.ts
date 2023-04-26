import Api from "@/core/api/api";
import {
    ConvertResponseVendorEntity,
    ResponseVendorEntity
} from "@/repository/vendor/list_vendor/entity/ResponseVendorEntity";


export const VendorRepository = async () : Promise<ResponseVendorEntity | null> => {
    const resp = await Api.get( "/admin/vendor/" )
    if ( resp !== null ) {
        return ConvertResponseVendorEntity.toResponseVendorEntity( resp );
    }
    return null;
}


export const VendorRepositoryByYear = async ( year : string ) : Promise<ResponseVendorEntity | null> => {
    const resp = await Api.post( "/admin/vendor/list", {
        year : year
    } )
    if ( resp !== null ) {
        return ConvertResponseVendorEntity.toResponseVendorEntity( resp );
    }
    return null;
}
