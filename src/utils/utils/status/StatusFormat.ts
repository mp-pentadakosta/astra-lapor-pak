import { EnumStatus } from "@/utils/enum/status/EnumStatus";


interface InterfaceStatusData {
    title : string;
    color : string;
    backgroundColor : string;
}

class StatusFormat {
    public statusData = ( props : EnumStatus ) : InterfaceStatusData => {
        return {
            title : props === EnumStatus.prosesAdmin ? "Diterima" : props === EnumStatus.diTolak ? "Ditolak" : props === EnumStatus.prosesVendor ? "Dalam Proses" : props === EnumStatus.selesai ? "Selesai" : "Tidak Diketahui",
            color : props === EnumStatus.verifikasiAdmin ? "white" :
                props === EnumStatus.prosesVendor ? "white" :
                    props === EnumStatus.diTolak ? "white" :
                        props === EnumStatus.selesai ? "white" :
                            props === EnumStatus.prosesAdmin ? "white" :
                                "black",
            backgroundColor : props === EnumStatus.selesai ? "#8bc34a" :
                props === EnumStatus.diTolak ? "#db3c30" :
                    props === EnumStatus.verifikasiAdmin ? "#03a9f4" :
                        props === EnumStatus.prosesVendor ? "#4caf50" :
                            props === EnumStatus.prosesAdmin ? "#4caf50" :
                                "#e5f8fa",
        }
    }

    public getStatus = ( data : string ) : EnumStatus => {
        return data === "Proses Admin" ? EnumStatus.prosesAdmin :
            data === "Verifikasi Admin" ? EnumStatus.verifikasiAdmin :
                data === "Ditolak" ? EnumStatus.diTolak :
                    data === "Proses Vendor" ? EnumStatus.prosesVendor :
                        data === "Selesai" ? EnumStatus.selesai :
                            EnumStatus.undefined;
    }
}

export default new StatusFormat();
