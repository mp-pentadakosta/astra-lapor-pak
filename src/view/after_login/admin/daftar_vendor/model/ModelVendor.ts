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
    total : number;
    poor : number;
    veryPoor : number;
    good : number;
    veryGood : number;
}
