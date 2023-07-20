import { toast } from "react-toastify";
import { FaCheck, FaInfo } from "react-icons/fa";
import React from "react";


export const ErrorResponse = ( data : string ) => {
    // window.location.reload()
    toast.error( data, {
        autoClose : 5000,
        style : {
            background : "#f44336",
            color : "#ffffff",
        },
        icon : <FaInfo/>,
        closeButton : true,
        hideProgressBar : true,
    } )
}

export const ErrorSuccess = ( data : string ) => {
    // window.location.reload()
    toast.success( data, {
        autoClose : 5000,
        style : {
            background : "#4caf50",
            color : "#ffffff",
        },
        icon : <FaCheck/>,
        closeButton : true,
        hideProgressBar : true,
    } )
}
