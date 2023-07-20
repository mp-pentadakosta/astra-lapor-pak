// To parse this data:
//
//   import { Convert, ResponsePengajuanEntity } from "./file";
//
//   const responsePengajuanEntity = Convert.toResponsePengajuanEntity(json);

export interface ResponsePengajuanEntity {
    status : boolean;
    message : string;
    data : DatumResponsePengajuanEntity[];
}

export interface DatumResponsePengajuanEntity {
    id : number;
    user_id : number;
    vendor_id : null;
    pengajuan_name : string;
    tanggal_pengajuan : string;
    tanggal_mulai : string;
    tanggal_selesai : string;
    deskripsi : string;
    komentar : null;
    prioritas : string;
    status : string;
    harga : number;
    is_deleted : null;
    createdAt : Date;
    updatedAt : Date;
    vendor : null;
    departemen : string;
    user : UserResponsePengajuanEntity;
    foto : FotoResponsePengajuanEntity[];
    aktivitas : AktivitaResponsePengajuanEntity[];
}

export interface UserResponsePengajuanEntity {
    nama : string;
    departemen : string;
}

export interface AktivitaResponsePengajuanEntity {
    id : number;
    pengajuan_id : number;
    tanggal : Date;
    deskripsi : DeskripsiResponsePengajuanEntity;
    createdAt : Date;
    updatedAt : Date;
}

export enum DeskripsiResponsePengajuanEntity {
    MembuatPengajuanBaru = "Membuat Pengajuan Baru",
    MembuatVendorBaru = "Membuat Vendor Baru",
    PengajuanDiterima = "Pengajuan Diterima",
    PengajuanDitolak = "Pengajuan Ditolak",
}

export interface FotoResponsePengajuanEntity {
    id : number;
    pengajuan_id : number;
    file_photo : string;
    createdAt : Date;
    updatedAt : Date;
}

// Converts JSON strings to/from your types
export class ConvertResponsePengajuanEntity {
    public static toResponsePengajuanEntity( json : string ) : ResponsePengajuanEntity {
        return JSON.parse( json );
    }

    public static responsePengajuanEntityToJson( value : ResponsePengajuanEntity ) : string {
        return JSON.stringify( value );
    }
}
