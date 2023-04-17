import Api from "@/core/api/api";
import { ModelAddVendor } from "@/view/after_login/admin/daftar_vendor/component/ModelAddVendor";


export const AddVendorRepository = async ( props : ModelAddVendor ) => {
    const resp = await Api.post( "/admin/vendor", props );
    if ( resp !== null ) {
        return resp;
    }
    return null;
}
