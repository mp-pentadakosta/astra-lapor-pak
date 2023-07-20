// To parse this data:
//
//   import { Convert, ResponseDashboardEntity } from "./file";
//
//   const responseDashboardEntity = Convert.toResponseDashboardEntity(json);

export interface ResponseDashboardEntity {
    status: boolean;
    message: string;
    data: DataResponseDashboardEntity;
}

export interface DataResponseDashboardEntity {
    tanggal_mulai: string;
    tanggal_selesai: string;
    jumlah: number;
}

// Converts JSON strings to/from your types
export class ConvertResponseDashboardEntity {
    public static toResponseDashboardEntity(json: string): ResponseDashboardEntity {
        return JSON.parse(json);
    }

    public static responseDashboardEntityToJson(value: ResponseDashboardEntity): string {
        return JSON.stringify(value);
    }
}
