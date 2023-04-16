import { EnumStatus } from "@/utils/enum/status/EnumStatus";
import StatusFormat from "@/utils/utils/status/StatusFormat";


interface InterfaceStatusCardStyle {
    data : EnumStatus
}

export const StatusCardStyle = ( props : InterfaceStatusCardStyle ) => {
    return <div style = { {
        backgroundColor : StatusFormat.statusData( props.data ).backgroundColor,
        borderRadius : "10px",
        padding : "5px",
        color : StatusFormat.statusData( props.data ).color,
        justifySelf : "center",
    } }>
        { props.data }
    </div>
}
