import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { ModelLayout } from "@/application/layout/model/ModelLayout";


export const HeaderViewModel = () => {

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
        header
    }
}
