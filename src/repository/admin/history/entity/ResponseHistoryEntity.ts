// To parse this data:
//
//   import { Convert, ResponseHistoryEntity } from "./file";
//
//   const responseHistoryEntity = Convert.toResponseHistoryEntity(json);

import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";
import { EnumStatus } from "@/utils/enum/status/EnumStatus";
import { EnumRating } from "@/utils/enum/rating/EnumRating";


export interface ResponseHistoryEntity {
    status : boolean;
    message : string;
    data : DatumResponseHistoryEntity[];
}

export interface DatumResponseHistoryEntity {
    id : number;
    user_id : number;
    vendor_id : number | null;
    pengajuan_name : string;
    tanggal_pengajuan : string;
    departemen : string;
    tanggal_mulai : string | null;
    tanggal_selesai : string | null;
    tanggal_penyelesaian : string | null;
    deskripsi : string;
    komentar : null | string;
    prioritas : EnumPrioritas;
    status : EnumStatus;
    rating : EnumRating | null;
    harga : number | null;
    is_deleted : null;
    user : UserHistory | null;
    vendor : InterfaceVendorHistory | null;
    createdAt : Date;
    updatedAt : Date;
    detail_rating : DetailRating | null;
}

interface UserHistory {
    nama : string;
    departemen : string;
}

interface InterfaceVendorHistory {
    alamat : string;
    createdAt : string;
    id : number;
    is_deleted : string | null;
    nama_vendor : string;
    pemilik_vendor : string;
    telpon : string
    updatedAt : string;
}

interface DetailRating{
    rating : number;
}

// Converts JSON strings to/from your types
export class ConvertResponseHistoryEntity {
    public static toResponseHistoryEntity( json : string ) : ResponseHistoryEntity {
        return JSON.parse( json );
    }

    public static responseHistoryEntityToJson( value : ResponseHistoryEntity ) : string {
        return JSON.stringify( value );
    }
}
