export interface ModelVendor {
    id : number;
    noVendor : string;
    namaVendor : string;
    pemilikVendor : string;
    alamat : string;
    telpon : string;
    order : ModelOrderVendor
}

export type ModelOrderVendor = {
    rate : number;
    poor : number;
    good : number;
    veryGood : number;
}
