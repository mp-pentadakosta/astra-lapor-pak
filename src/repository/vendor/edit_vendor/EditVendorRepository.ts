import Api from "@/core/api/api";
import {ModelAddVendor} from "@/view/after_login/admin/daftar_vendor/component/ModelAddVendor";
import {TypeModelVendor} from "@/view/after_login/admin/daftar_vendor/model/ModelAddVendor";


export const EditVendorRepository = async (id: number, props: TypeModelVendor) => {
    const resp = await Api.patch(`/admin/vendor/${id}`, props);
    if (resp !== null) {
        return resp;
    }
    return null;
}
