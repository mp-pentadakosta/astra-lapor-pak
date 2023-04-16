"use client"
import React, { useState } from "react";


export interface InterfaceModal {
    show : () => void
    hide : () => void
    body : ( value : React.ReactNode ) => void
    // dataPengajuan : ( data : ModelAddPengajuan ) => void
    // dataValue : ModelAddPengajuan | undefined
}

export const ModalContext = React.createContext <InterfaceModal>( {} as InterfaceModal );

interface InterfaceModalData {
    children : React.ReactNode
}

export const ModalData = ( props : InterfaceModalData ) => {
    const [ show, setShow ] = useState( false );
    const [ modalBody, setModalBody ] = useState<React.ReactNode>( <div></div> );
    // const [ pengajuan, setPengajuan ] = useState<ModelAddPengajuan>();
    return <ModalContext.Provider value = { {
        show : () => setShow( true ),
        hide : () => setShow( false ),
        body : ( value : React.ReactNode ) => setModalBody( value ),
        // dataPengajuan : ( data : ModelAddPengajuan ) => setPengajuan( data ),
        // dataValue : pengajuan
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
