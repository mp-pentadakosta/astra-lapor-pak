// To parse this data:
//
//   import { Convert, ResponseLoginEntity } from "./file";
//
//   const responseLoginEntity = Convert.toResponseLoginEntity(json);

export interface ResponseLoginEntity {
    status : boolean;
    message : string;
    data : DataResponseLoginEntity;
}

export interface DataResponseLoginEntity {
    token : string;
    id : number;
    email : string;
    nama : string;
    departemen : string;
    roles : string;
}

// Converts JSON strings to/from your types
export class ConvertResponseLoginEntity {
    public static toResponseLoginEntity( json : string ) : ResponseLoginEntity {
        return JSON.parse( json );
    }

    public static responseLoginEntityToJson( value : ResponseLoginEntity ) : string {
        return JSON.stringify( value );
    }
}
