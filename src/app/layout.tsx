import React from "react";
import { ToastData } from "@/application/component/alert/ToastData";
import { ModalData } from "@/application/component/modal/ModalContext";


export default function AuthLayout( {
                                        children,
                                    } : {
    children : React.ReactNode;
} ) {

    return (
        <html lang = "en">

        <body>


        {/*<ModalData>*/ }
        {/*    <ToastData>*/ }
        { children }
        {/*    </ToastData>*/ }
        {/*</ModalData>*/ }


        </body>


        </html>
    );
}
