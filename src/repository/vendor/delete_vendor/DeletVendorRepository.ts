import Api from "@/core/api/api";


export const DeletVendorRepository = async ( id : number ) => {
    const resp = await Api.delete( `/admin/vendor/${ id }`, {} );
    if ( resp !== null ) {
        return resp;
    }
    return null;
}
