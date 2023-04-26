// To parse this data:
//
//   import { Convert, ResponseVendorEntity } from "./file";
//
//   const responseVendorEntity = Convert.toResponseVendorEntity(json);

export interface ResponseVendorEntity {
    status : boolean;
    message : string;
    data : DatumResponseVendorEntity[];
}

export interface DatumResponseVendorEntity {
    id : number;
    nama_vendor : string;
    pemilik_vendor : string;
    no_vendor : string;
    alamat : string;
    telpon : string;
    is_deleted : null;
    createdAt : string;
    updatedAt : string;
    countAll : number;
    countPoor : number;
    countVeryPoor : number;
    countGood : number;
    countVeryGood : number;
}

// Converts JSON strings to/from your types
export class ConvertResponseVendorEntity {
    public static toResponseVendorEntity( json : string ) : ResponseVendorEntity {
        return JSON.parse( json );
    }

    public static responseVendorEntityToJson( value : ResponseVendorEntity ) : string {
        return JSON.stringify( value );
    }
}
