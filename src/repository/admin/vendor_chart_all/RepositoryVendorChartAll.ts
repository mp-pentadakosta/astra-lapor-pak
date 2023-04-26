import Api from "@/core/api/api";
import {
    ConvertResponseVendorChartAllEntity,
    ResponseVendorChartAllEntity
} from "@/repository/admin/vendor_chart_all/entity/ResponseVendorChartAllEntity";


export const RepositoryVendorChartAll = async ( year : string ) : Promise<ResponseVendorChartAllEntity | null> => {
    const resp = await Api.post( `/admin/pengajuan/chart/count`, {
        year : year
    } )
    if ( resp !== null ) {
        return ConvertResponseVendorChartAllEntity.toResponseVendorChartAllEntity( resp );
    }
    return null;
}
