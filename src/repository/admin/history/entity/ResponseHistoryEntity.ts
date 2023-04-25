// To parse this data:
//
//   import { Convert, ResponseHistoryEntity } from "./file";
//
//   const responseHistoryEntity = Convert.toResponseHistoryEntity(json);

import {EnumPrioritas} from "@/utils/enum/prioritas/EnumPrioritas";
import {EnumStatus} from "@/utils/enum/status/EnumStatus";


export interface ResponseHistoryEntity {
    status: boolean;
    message: string;
    data: DatumResponseHistoryEntity[];
}

export interface DatumResponseHistoryEntity {
    id: number;
    user_id: number;
    vendor_id: number | null;
    pengajuan_name: string;
    tanggal_pengajuan: string;
    departemen: string;
    tanggal_mulai: Date | null;
    tanggal_selesai: Date | null;
    deskripsi: string;
    komentar: null | string;
    prioritas: EnumPrioritas;
    status: EnumStatus;
    harga: number;
    is_deleted: null;
    createdAt: Date;
    updatedAt: Date;
}

export enum DepartemenResponseHistoryEntity {
    PartDept = "Part Dept",
}

// export enum EnumPrioritas {
//     High = "High",
//     Low = "Low",
//     Normal = "Normal",
// }

export enum StatusResponseHistoryEntity {
    Ditolak = "Ditolak",
    ProsesAdmin = "Proses Admin",
    Selesai = "Selesai",
    VerifikasiAdmin = "Verifikasi Admin",
}

// Converts JSON strings to/from your types
export class ConvertResponseHistoryEntity {
    public static toResponseHistoryEntity(json: string): ResponseHistoryEntity {
        return JSON.parse(json);
    }

    public static responseHistoryEntityToJson(value: ResponseHistoryEntity): string {
        return JSON.stringify(value);
    }
}
