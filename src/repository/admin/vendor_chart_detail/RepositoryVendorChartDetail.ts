import Api from "@/core/api/api";
import {
    ConvertResponseVendorChartDetailEntity,
    ResponseVendorChartDetailEntity
} from "@/repository/admin/vendor_chart_detail/entity/ResponseVendorChartDetailEntity";


export const RepositoryVendorChartDetail = async ( id : number, year : string ) : Promise<ResponseVendorChartDetailEntity | null> => {
    const resp = await Api.post( `/admin/pengajuan/chart/count/${ id }`, {
        year : year
    } )
    if ( resp !== null ) {
        return ConvertResponseVendorChartDetailEntity.toResponseVendorChartDetailEntity( resp );
    }
    return null;
}
