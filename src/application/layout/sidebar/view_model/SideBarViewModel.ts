import { ModelSideBar } from "@/application/layout/sidebar/model/ModelSideBar";
import { useEffect, useState } from "react";
import { ModelLayout } from "@/application/layout/model/ModelLayout";
import { getCookie } from "cookies-next";


export const SideBarViewModel = () => {

    const sideBarItemsAdmin : ModelSideBar[] = [
        {
            key : "dashboard",
            title : "Dashboard",
            route : "",
            icon : "home",
        },
        {
            key : "daftar-pengajuan",
            title : "Daftar Pengajuan",
            route : "/daftar-pengajuan",
            icon : "edit",
        },
        {
            key : "history",
            title : "History Pengajuan",
            route : "/history-pengajuan",
            icon : "database",
        },
    ]

    const [ header, setHeader ] = useState<ModelLayout>();

    const getDataProfile = async () => {
        const role = await getCookie( "role" )
        const email = await getCookie( "email" )
        const departemen = await getCookie( "departemen" )
        const nama = await getCookie( "nama" )

        setHeader( {
            email : email as string,
            departement : departemen as string,
            name : nama as string,
            role : role as string,
            route : role === 'admin' ? '/admin' : role === 'user' ? '/user' : role === 'atasan' ? '/atasan' : '/'
        } );
    }

    useEffect( () => {
        getDataProfile();
        return () => {

        };
    }, [] );

    return {
        sideBarItemsAdmin,
        header
    }
}
