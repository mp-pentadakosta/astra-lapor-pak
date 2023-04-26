// To parse this data:
//
//   import { Convert, ResponseVendorChartAllEntity } from "./file";
//
//   const responseVendorChartAllEntity = Convert.toResponseVendorChartAllEntity(json);

export interface ResponseVendorChartAllEntity {
    status: boolean;
    message: string;
    data: DatumResponseVendorChartAllEntity[];
}

export interface DatumResponseVendorChartAllEntity {
    month: number;
    countPoor: number;
    countVeryPoor: number;
    countGood: number;
    countVeryGood: number;
}

// Converts JSON strings to/from your types
export class ConvertResponseVendorChartAllEntity {
    public static toResponseVendorChartAllEntity(json: string): ResponseVendorChartAllEntity {
        return JSON.parse(json);
    }

    public static responseVendorChartAllEntityToJson(value: ResponseVendorChartAllEntity): string {
        return JSON.stringify(value);
    }
}
