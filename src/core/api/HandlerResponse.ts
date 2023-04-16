import { ErrorResponse } from "@/core/api/ErrorResponse";


class HandlerResponse {
    public success( data : any ) {
        ErrorResponse( 'Success Tambah Data' )
    }

    public badRequest( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

    public unauthorized( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

    public forbidden( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

    public notFound( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

    public methodNotAllowed( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

    public timeout( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

    public internalError( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

    public networkError( data : any ) {
        // console.debug( data )
        ErrorResponse( data )
    }

}

export default new HandlerResponse();
