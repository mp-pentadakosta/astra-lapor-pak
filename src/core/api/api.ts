import { EnumMethod } from "@/core/enum/enum_method/EnumMethod";
import { HeaderData } from "@/core/api/HeaderData";
import axios, { AxiosError } from "axios";
import HandlerResponse from "@/core/api/HandlerResponse";


axios.interceptors.request.use( request => {
    console.debug( 'METHOD : ', request.method );
    console.debug( 'URL : ', request.url );
    console.debug( 'Request Headers : ', JSON.stringify( request.headers ) );
    console.debug( 'Request Data : ', JSON.stringify( request.data ?? {} ) );
    console.debug( 'REQUEST...' + '\n' );
    console.debug( '\n' );
    return request;
} );

axios.interceptors.response.use(
    response => {
        console.debug( 'RESPONSE : ' );
        console.debug( 'Response Status : ', response.status );
        console.debug( 'PATH : ', response.request.responseURL );
        console.debug( 'Response Headers : ', JSON.stringify( response.headers ) );
        console.debug( 'Response Body : ', JSON.stringify( response.data ) );
        return response;
    },
    error => {
        console.debug( 'RESPONSE : ' );
        console.debug( 'Response Status : ', error.response?.status );
        console.debug( 'Response Headers : ', JSON.stringify( error.response?.headers ) );
        console.debug( 'Response Body : ', JSON.stringify( error.response?.data ) );
        return Promise.reject( error );
    },
);


class Api {

    private _fetching = async ( method : EnumMethod, url : string, data? : any ) => {
        const host = process.env.HOST as string;
        const urlApi = `${ host }${ url }`;
        const header = await HeaderData();

        console.debug( "URL : ", urlApi )

        try {
            const resp = await axios( {
                url : urlApi,
                method : method,
                data : data,
                headers : header,
                timeout : 50000,
                timeoutErrorMessage : 'Timeout'
            } );
            if ( resp.status === 200 ) {
                return JSON.stringify( resp.data );
            }
            if ( resp.status === 201 ) {
                HandlerResponse.success( 'Success add data' )
            }
            return null;
        } catch ( e ) {
            const error = e as AxiosError;

            if ( error.message === 'Timeout' ) {
                HandlerResponse.timeout( error.message )
                return null;
            }

            if ( error.response?.status === 400 ) {
                HandlerResponse.badRequest( error.message )
                return null;
            }
            else if ( error.response?.status === 401 ) {
                HandlerResponse.unauthorized( error.message )
                return null;
            }
            else if ( error.response?.status === 403 ) {
                HandlerResponse.forbidden( error.message )
                return null;
            }
            else if ( error.response?.status === 404 ) {
                HandlerResponse.notFound( error.message )
                return null;
            }
            else if ( error.response?.status === 405 ) {
                HandlerResponse.methodNotAllowed( error.message )
                return null;
            }
            else if ( error.response?.status === 500 ) {
                HandlerResponse.internalError( error.message )
                return null;
            }
            else if ( error.response?.status === 501 || error.response?.status === 502 || error.response?.status === 503 ) {
                HandlerResponse.networkError( error.message )
                return null;
            }
        } finally {
            console.debug( 'FINALLY...' + '\n' );
            console.debug( '\n' );
        }
    }

    public get = async ( url : string ) : Promise<any> => {
        return await this._fetching( EnumMethod.GET, url );
    }
    public post = async ( url : string, data : any ) : Promise<any> => {
        return await this._fetching( EnumMethod.POST, url, data );
    }
    public put = async ( url : string, data : any ) : Promise<any> => {
        return await this._fetching( EnumMethod.PUT, url, data );
    }
    public patch = async ( url : string, data : any ) : Promise<any> => {
        return await this._fetching( EnumMethod.PATCH, url, data );
    }
    public delete = async ( url : string, data : any ) : Promise<any> => {
        return await this._fetching( EnumMethod.DELETE, url, data );
    }

}

export default new Api();
