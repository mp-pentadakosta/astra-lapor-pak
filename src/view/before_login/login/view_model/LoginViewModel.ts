import { useEffect, useState } from "react";
import { ModelFormLogin } from "@/view/before_login/login/model/ModelFormLogin";
import { LoginRepository } from "@/repository/login_repository/LoginRepository";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";


export const LoginViewModel = () => {

    const route = useRouter()

    const [ loading, setLoading ] = useState( false );
    const [ login, setLogin ] = useState<ModelFormLogin>( {
        email : '',
        password : '',
    } );

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


    const doLogin = async () => {
        setLoading( true )
        if ( login.email !== "" && login.password !== "" ) {
            const resp = await LoginRepository( {
                email : login.email,
                password : login.password,
            } );
            if ( resp !== null ) {
                await setCookie( "token", resp.data.token, {
                    expires : new Date( Date.now() + 24 * 60 * 60 * 1000 ),
                } );
                await setCookie( "role", resp.data.roles, {
                    expires : new Date( Date.now() + 24 * 60 * 60 * 1000 ),
                } );
                await setCookie( "email", resp.data.email, {
                    expires : new Date( Date.now() + 24 * 60 * 60 * 1000 ),
                } );
                await setCookie( "nama", resp.data.nama, {
                    expires : new Date( Date.now() + 24 * 60 * 60 * 1000 ),
                } );
                await setCookie( "departemen", resp.data.departemen, {
                    expires : new Date( Date.now() + 24 * 60 * 60 * 1000 ),
                } );
                setLoading( false )
                if ( resp.data.roles === "admin" ) {
                    return route.replace( '/admin' )
                }
                if ( resp.data.roles === "user" ) {
                    return route.replace( '/user' )
                }
                if ( resp.data.roles === "atasan" ) {
                    return route.replace( '/atasan' )
                }
                return route.replace( '/auth/login' )
            }
            else {
            }
        }
        else {
            alert( "Email dan Password tidak boleh kosong" )
        }
        setLoading( false )
    }


    return {
        login,
        setLogin,
        doLogin,
        loading
        // doLogin2
    }
}
