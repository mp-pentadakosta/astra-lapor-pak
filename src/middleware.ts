import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware( request : NextRequest ) {
    if ( request.cookies.get( 'token' ) ) {
        return NextResponse.next()
    }
    return NextResponse.redirect( new URL( '/auth/login', request.url ) )
}

// See "Matching Paths" below to learn more
export const config = {
    matcher : [
        '/',
        '/admin/:path*',
        '/user/:path*',
        '/atasan/:path*',
    ],
}
