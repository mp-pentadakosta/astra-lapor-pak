"use client";

import React, { useState } from "react";


export interface InterfaceToastDataContext {
    show : ( value : boolean ) => void
}

export const ToastContext = React.createContext <InterfaceToastDataContext>( {} as InterfaceToastDataContext );

interface InterfaceToastData {
    children : React.ReactNode
}

export const ToastData = ( props : InterfaceToastData ) => {
    const [ show, setShow ] = useState( false );
    return <ToastContext.Provider
        value = { {
            show : ( value : boolean ) => setShow( value )
        } }>
        {
            show && toast()
        }
        {
            props.children
        }
    </ToastContext.Provider>

    function toast() {
        return <div id = "alerttopright"
                    className = "myadmin-alert myadmin-alert-img alert-success myadmin-alert-top-right"
                    style = { {
                        display : show ? "block" : "none"
                    } }>
            <img src = "/images/avatar.png" className = "img" alt = "img"/>
            <div className = { `closed` } onClick = { () => {
                setShow( false )
            } }>&times;</div>
            <h4>You have a Message!</h4> <b>John Doe</b> sent you a message.
        </div>
    }
}


export const ToastConsumer = ToastContext.Consumer;
