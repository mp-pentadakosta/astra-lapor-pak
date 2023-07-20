import { getCookie } from "cookies-next";


export const HeaderData = async () => {
    const token = await getCookie( "token" )
    const tokenData = "Bearer " + token
    return {
        'Content-Type' : 'application/json',
        'Authorization' : tokenData,
    }
}
