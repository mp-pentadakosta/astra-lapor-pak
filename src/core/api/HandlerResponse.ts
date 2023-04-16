import { ErrorResponse } from "@/core/api/ErrorResponse";


class HandlerResponse {
    public success( data : any ) {
        alert( data )
    }

    public badRequest( data : any ) {
        // console.debug( data )
        ErrorResponse()
    }

    public unauthorized( data : any ) {
        // console.debug( data )
        ErrorResponse()
    }

    public forbidden( data : any ) {
        // console.debug( data )
        ErrorResponse()
    }

    public notFound( data : any ) {
        // console.debug( data )
        ErrorResponse()
    }

    public methodNotAllowed( data : any ) {
        // console.debug( data )
        ErrorResponse()
    }

    public timeout( data : any ) {
        // console.debug( data )
        ErrorResponse()
    }

    public internalError( data : any ) {
        // console.debug( data )
    }

    public networkError( data : any ) {
        // console.debug( data )
        ErrorResponse()
    }

}

export default new HandlerResponse();
