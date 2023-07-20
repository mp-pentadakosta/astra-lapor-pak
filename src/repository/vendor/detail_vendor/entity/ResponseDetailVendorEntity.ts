// To parse this data:
//
//   import { Convert, ResponseDetailVendorEntity } from "./file";
//
//   const responseDetailVendorEntity = Convert.toResponseDetailVendorEntity(json);

export interface ResponseDetailVendorEntity {
    status: boolean;
    message: string;
    data: DataResponseDetailVendorEntity;
}

export interface DataResponseDetailVendorEntity {
    id: number;
    nama_vendor: string;
    pemilik_vendor: string;
    no_vendor: string;
    alamat: string;
    telpon: string;
    is_deleted: null;
    createdAt: string;
    updatedAt: string;
    Pengajuan: any[];
}

// Converts JSON strings to/from your types
export class ConvertResponseDetailVendorEntity {
    public static toResponseDetailVendorEntity(json: string): ResponseDetailVendorEntity {
        return JSON.parse(json);
    }

    public static responseDetailVendorEntityToJson(value: ResponseDetailVendorEntity): string {
        return JSON.stringify(value);
    }
}
