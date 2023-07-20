import Api from "@/core/api/api";
import {EnumTipeDashboard} from "@/utils/enum/tipe_dashboard/EnumTipeDashboard";
import {
    ConvertResponseDashboardEntity,
    ResponseDashboardEntity
} from "@/repository/admin/dashboard/entity/ResponseDashboardEntity";

export const DashboardAdminRepository = async (path: string, tipe: EnumTipeDashboard): Promise<ResponseDashboardEntity | null> => {
    const resp = await Api.post(`/${path}/pengajuan/dashboard/count`, {
        "tipe": tipe
    })
    if (resp !== null) {
        return ConvertResponseDashboardEntity.toResponseDashboardEntity(resp)
    }
    return null
}
