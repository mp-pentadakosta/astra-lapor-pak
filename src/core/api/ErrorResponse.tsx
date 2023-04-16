import { toast } from "react-toastify";
import Image from "next/image";


export const ErrorResponse = ( data : string ) => {
    toast.error( data, {
        style : {
            background : "#f44336",
            color : "#ffffff",
        },
        icon : () => {
            return <div>
                <Image src = { '/img/img/caution.png' }
                       alt = { 'error' }
                       width = { 20 }
                       height = { 20 }
                       color = { 'white' }/>
            </div>
        },
        closeButton : true,
        theme : "light",
    } )
}
