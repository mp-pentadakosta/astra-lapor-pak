import { EnumStatus } from "@/utils/enum/status/EnumStatus";
import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";


export interface ModelDaftarPengajuanAtasan {
    id : number
    namaBarang : string
    namaPemohon : string
    tanggalPengajuan : string
    departemen : string
    prioritas : EnumPrioritas
    status : EnumStatus
}
