import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";


interface InterfaceStatusPrioritas {
    color : string;
    backgroundColor : string;
}

class StatusPrioritas {
    public statusPrioritas = ( props : EnumPrioritas ) : InterfaceStatusPrioritas => {
        return {
            color : props === EnumPrioritas.high ? "white" : props === EnumPrioritas.medium ? "white" : "white",
            backgroundColor : props === EnumPrioritas.high ? "#db3c30" : props === EnumPrioritas.medium ? "#03a9f4" : "#4caf50"
        }
    }
}

export default new StatusPrioritas();
