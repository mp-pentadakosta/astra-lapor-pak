// To parse this data:
//
//   import { Convert, ResponseVendorChartAllEntity } from "./file";
//
//   const responseVendorChartAllEntity = Convert.toResponseVendorChartAllEntity(json);

export interface ResponseVendorChartAllEntity {
    status : boolean;
    message : string;
    data : DatumResponseVendorChartAllEntity[];
}

export interface DatumResponseVendorChartAllEntity {
    id : number;
    nama_vendor : string;
    pemilik_vendor : string;
    no_vendor : string;
    alamat : string;
    telpon : string;
    is_deleted : null;
    createdAt : string;
    updatedAt : string;
    sum_rating : SumRating;
}

export interface SumRating {
    countPoor : number;
    countVeryPoor : number;
    countVeryGood : number;
    countGood : number;
}

// Converts JSON strings to/from your types
export class ConvertResponseVendorChartAllEntity {
    public static toResponseVendorChartAllEntity( json : string ) : ResponseVendorChartAllEntity {
        return JSON.parse( json );
    }

    public static responseVendorChartAllEntityToJson( value : ResponseVendorChartAllEntity ) : string {
        return JSON.stringify( value );
    }
}
