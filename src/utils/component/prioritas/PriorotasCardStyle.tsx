import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";
import StatusPrioritas from "@/utils/utils/prioritas/StatusPrioritas";


interface InterfacePrioritasCardStyle {
    data : EnumPrioritas
}

export const PriorotasCardStyle = ( props : InterfacePrioritasCardStyle ) => {
    return <div style = { {
        backgroundColor : StatusPrioritas.statusPrioritas( props.data ).backgroundColor,
        borderRadius : "10px",
        padding : "5px",
        color : StatusPrioritas.statusPrioritas( props.data ).color,
        justifySelf : "center",
    } }>
        { props.data }
    </div>
}
