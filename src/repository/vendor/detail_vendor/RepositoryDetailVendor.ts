import Api from "@/core/api/api";
import {
    ConvertResponseDetailVendorEntity,
    ResponseDetailVendorEntity
} from "@/repository/vendor/detail_vendor/entity/ResponseDetailVendorEntity";

export const RepositoryDetailVendor = async (id: number): Promise<ResponseDetailVendorEntity | null> => {
    const resp = await Api.get("/admin/vendor/" + id)
    if (resp !== null) {
        return ConvertResponseDetailVendorEntity.toResponseDetailVendorEntity(resp)
    }
    return null;

}
