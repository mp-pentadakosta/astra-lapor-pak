// To parse this data:
//
//   import { Convert, ResponseVendorChartDetailEntity } from "./file";
//
//   const responseVendorChartDetailEntity = Convert.toResponseVendorChartDetailEntity(json);

export interface ResponseVendorChartDetailEntity {
    status: boolean;
    message: string;
    data: DataResponseVendorChartDetailEntity;
}

export interface DataResponseVendorChartDetailEntity {
    id: number;
    nama_vendor: string;
    pemilik_vendor: string;
    no_vendor: string;
    alamat: string;
    telpon: string;
    is_deleted: null;
    createdAt: string;
    updatedAt: string;
    countMonth: CountMonthResponseVendorChartDetailEntity[];
}

export interface CountMonthResponseVendorChartDetailEntity {
    month: number;
    count: number;
}

// Converts JSON strings to/from your types
export class ConvertResponseVendorChartDetailEntity {
    public static toResponseVendorChartDetailEntity(json: string): ResponseVendorChartDetailEntity {
        return JSON.parse(json);
    }

    public static responseVendorChartDetailEntityToJson(value: ResponseVendorChartDetailEntity): string {
        return JSON.stringify(value);
    }
}
