"use client";

import Head from "next/head";
import Script from "next/script";
import "../../../public/src/css/vendors_css.css"
import "../../../public/src/css/style.css"
import "../../../public/src/css/skin_color.css"
import React from "react";
import { ModalData } from "@/application/component/modal/ModalContext";
import { ToastData } from "@/application/component/alert/ToastData";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AuthLayout( {
                                        children,
                                    } : {
    children : React.ReactNode;
} ) {

    return (
        <html lang = "en">
        <Head>
            <meta charSet = "utf-8"/>
            <meta httpEquiv = "X-UA-Compatible" content = "IE=edge"/>
            <meta name = "viewport" content = "width=device-width, initial-scale=1"/>
            <meta name = "description" content = ""/>
            <meta name = "author" content = ""/>
            <title>Log in</title>
        </Head>
        <body className = "hold-transition theme-primary bg-img"
              style = { {
                  backgroundImage : "url(/images/auth-bg/bg-16.jpg)"
              } }>
        <ModalData>
            <ToastContainer/>
            <ToastData>
                { children }
            </ToastData>
        </ModalData>


        </body>

        <Script src = "/src/js/vendors.min.js"></Script>
        <Script src = "/src/js/pages/chat-popup.js"></Script>
        <Script src = "/assets/icons/feather-icons/feather.min.js"></Script>

        </html>
    );
}
