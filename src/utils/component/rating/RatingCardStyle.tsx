import StatusPrioritas from "@/utils/utils/prioritas/StatusPrioritas";
import { EnumRating } from "@/utils/enum/rating/EnumRating";
import RatingFormat from "@/utils/utils/rating/RatingFormat";


interface InterfaceRatingCardStyle {
    data : EnumRating
}

export const RatingCardStyle = ( props : InterfaceRatingCardStyle ) => {
    return <div style = { {
        backgroundColor : RatingFormat.colorStatusRating( props.data ).background,
        borderRadius : "10px",
        padding : "5px",
        color : RatingFormat.colorStatusRating( props.data ).color,
        justifySelf : "center",
    } }>
        { props.data }
    </div>
}
