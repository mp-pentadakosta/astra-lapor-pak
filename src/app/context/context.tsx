import { useState } from "react";


export const Context = () => {
    console.debug( "Context" )
    const [ show, setShow ] = useState( false );
    console.log( show )
}

