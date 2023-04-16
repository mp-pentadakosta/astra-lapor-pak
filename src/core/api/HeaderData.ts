import { getCookie } from "cookies-next";


export const HeaderData = async () => {
    const token = await getCookie( "token" )
    return {
        'Content-Type' : 'application/json',
        'token' : token ?? '',
    }
}
