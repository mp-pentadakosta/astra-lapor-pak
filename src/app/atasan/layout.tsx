"use client";


import Head from "next/head";

import "../../../public/src/css/vendors_css.css"
import "../../../public/src/css/style.css"
import "../../../public/src/css/skin_color.css"
import Script from "next/script";
import { HeaderLayout } from "@/application/layout/header/HeaderLayout";
import { SideBarLayout } from "@/application/layout/sidebar/SideBarLayout";
import { ToastData } from "@/application/component/alert/ToastData";
import { ModalData } from "@/application/component/modal/ModalContext";
import React from "react";
import { ToastContainer } from "react-toastify";


export default function RootLayout( {
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
            <title>ASTRA HONDA</title>
        </Head>
        <body className = "hold-transition light-skin sidebar-mini theme-primary fixed">


        <ModalData>
            <ToastContainer
                autoClose = { false }
                closeOnClick = { true }/>
            <ToastData>
                <div className = "wrapper">
                    <HeaderLayout/>
                    <SideBarLayout/>
                    { children }
                </div>
            </ToastData>
        </ModalData>


        </body>

        <Script src = "/src/js/vendors.min.js"></Script>
        <Script src = "/src/js/pages/chat-popup.js"></Script>
        <Script src = "/assets/icons/feather-icons/feather.min.js"></Script>
        <Script src = "/assets/vendor_components/bootstrap-daterangepicker/daterangepicker.js"></Script>
        <Script src = "/src/js/demo.js"></Script>
        <Script src = "/src/js/template.js"></Script>
        <Script src = "/src/js/pages/dashboard.js"></Script>

        </html>
    );
}
