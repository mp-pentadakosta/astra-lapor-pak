import { toast } from "react-toastify";
import { FaCheck, FaInfo } from "react-icons/fa";


export const ErrorResponse = ( data : string ) => {
    toast.error( data, {
        style : {
            background : "#f44336",
            color : "#ffffff",
        },
        icon : () => {
            return <div>
                <FaInfo/>
            </div>
        },
        closeButton : true,
        theme : "light",
    } )
}

export const ErrorSuccess = ( data : string ) => {
    toast.error( data, {
        style : {
            background : "#4caf50",
            color : "#ffffff",
        },
        icon : () => {
            return <div>
                <FaCheck/>
            </div>
        },
        closeButton : true,
        theme : "light",
    } )
}
