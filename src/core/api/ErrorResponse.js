import {toast} from "react-toastify";
import Image from "next/image";

export const ErrorResponse = () => {
    console.debug("ERROR RESPONSE")
    toast.error("Wow so easy!", {
        style: {
            background: "#f44336",
            color: "#ffffff",
        },
        icon: () => {
            return <div>
                <Image src = {'/img/img/caution.png'} alt = {'error'} width = {20} height = {20} color = {'white'}/>
            </div>
        },
        closeButton: true,
        theme: "light",
    })
}
