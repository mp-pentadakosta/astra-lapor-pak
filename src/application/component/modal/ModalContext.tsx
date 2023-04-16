"use client"
import React, { useState } from "react";


export interface InterfaceModal {
    show : () => void
    hide : () => void
    body : ( value : React.ReactNode ) => void
}

export const ModalContext = React.createContext <InterfaceModal>( {} as InterfaceModal );

interface InterfaceModalData {
    children : React.ReactNode
}

export const ModalData = ( props : InterfaceModalData ) => {
    const [ show, setShow ] = useState( false );
    const [ modalBody, setModalBody ] = useState<React.ReactNode>( <div></div> );
    return <ModalContext.Provider value = { {
        show : () => setShow( true ),
        hide : () => setShow( false ),
        body : ( value : React.ReactNode ) => setModalBody( value ),
    } }>
        {
            show && modal()
        }
        {
            props.children
        }
    </ModalContext.Provider>

    function modal() {
        return <div style = { {
            position : "absolute",
            width : "100%",
            height : "100%",
            zIndex : 9999,
            backgroundColor : "rgba(0,0,0,0.5)",
        } }>
            {
                modalBody
            }
        </div>
    }
}
