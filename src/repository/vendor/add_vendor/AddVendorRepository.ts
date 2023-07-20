import Api from "@/core/api/api";
import {ModelAddVendor} from "@/view/after_login/admin/daftar_vendor/component/ModelAddVendor";
import {TypeModelVendor} from "@/view/after_login/admin/daftar_vendor/model/ModelAddVendor";


export const AddVendorRepository = async (props: TypeModelVendor) => {
    const resp = await Api.post("/admin/vendor", props);
    if (resp !== null) {
        return resp;
    }
    return null;
}
