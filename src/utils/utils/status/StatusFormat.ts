import { EnumStatus } from "@/utils/enum/status/EnumStatus";


interface InterfaceStatusData {
    title : string;
    color : string;
    backgroundColor : string;
}

class StatusFormat {
    public statusData = ( props : EnumStatus ) : InterfaceStatusData => {
        return {
            title : props === EnumStatus.diTerima ? "Diterima" : props === EnumStatus.diTolak ? "Ditolak" : props === EnumStatus.dalamProses ? "Dalam Proses" : props === EnumStatus.selesai ? "Selesai" : "Tidak Diketahui",
            color : props === EnumStatus.diTerima ? "white" :
                props === EnumStatus.diTolak ? "white" :
                    props === EnumStatus.dalamProses ? "white" :
                        props === EnumStatus.selesai ? "white" :
                            "black",
            backgroundColor : props === EnumStatus.diTerima ? "#8bc34a" :
                props === EnumStatus.diTolak ? "#db3c30" :
                    props === EnumStatus.dalamProses ? "#03a9f4" :
                        props === EnumStatus.selesai ? "#4caf50" :
                            "#e5f8fa",
        }
    }
}

export default new StatusFormat();
