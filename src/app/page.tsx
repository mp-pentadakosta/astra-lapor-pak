"use client";

import { useEffect } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";


export default function Home() {
    const route = useRouter()
    const checkLogin = async () => {
        const token = await getCookie( "token" )
        const role = await getCookie( "role" )
        if ( token ) {
            if ( role === "admin" ) {
                return route.replace( '/admin' )
            }
            if ( role === "user" ) {
                return route.replace( '/user' )
            }
            if ( role === "atasan" ) {
                return route.replace( '/atasan' )
            }
            deleteCookie( "token" )
            deleteCookie( "role" )
            return route.replace( '/auth/login' )
        }
    }
    useEffect( () => {
        checkLogin()
        return () => {
        };
    }, [] );

    return <div></div>
}
