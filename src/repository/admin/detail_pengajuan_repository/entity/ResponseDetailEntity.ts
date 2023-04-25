// To parse this data:
//
//   import { Convert, ResponseDetailEntity } from "./file";
//
//   const responseDetailEntity = Convert.toResponseDetailEntity(json);

export interface ResponseDetailEntity {
    status: boolean;
    message: string;
    data: DataResponseDetailEntity;
}

export interface DataResponseDetailEntity {
    id: number;
    user_id: number;
    vendor_id: null;
    pengajuan_name: string;
    tanggal_pengajuan: string;
    departemen: string;
    tanggal_mulai: null;
    tanggal_selesai: null;
    deskripsi: string;
    komentar: string | null;
    komentar_selesai: string | null;
    prioritas: string;
    status: string;
    harga: number;
    is_deleted: null;
    createdAt: Date;
    updatedAt: Date;
    vendor: DataVendor | null;
    foto: FotoResponseDetailEntity[];
    aktivitas: AktivitaResponseDetailEntity[];
}

export interface DataVendor {
    id: number;
    no_vendor: string;
    nama_vendor: string;
    pemilik_vendor: string;
    alamat: string;
    telpon: string;
    is_deleted: null;
    createdAt: Date;
    updatedAt: Date;
}

export interface AktivitaResponseDetailEntity {
    id: number;
    pengajuan_id: number;
    tanggal: Date;
    deskripsi: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface FotoResponseDetailEntity {
    id: number;
    pengajuan_id: number;
    file_photo: string;
    createdAt: Date;
    updatedAt: Date;
}

// Converts JSON strings to/from your types
export class ConvertResponseDetailEntity {
    public static toResponseDetailEntity(json: string): ResponseDetailEntity {
        return JSON.parse(json);
    }

    public static responseDetailEntityToJson(value: ResponseDetailEntity): string {
        return JSON.stringify(value);
    }
}
