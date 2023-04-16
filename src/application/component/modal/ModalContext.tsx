"use client"
import React, { useState } from "react";


export interface InterfaceModal {
    show : ( value : boolean ) => void
}

export const ModalContext = React.createContext <InterfaceModal>( {} as InterfaceModal );

interface InterfaceModalData {
    children : React.ReactNode
}

export const ModalData = ( props : InterfaceModalData ) => {
    const [ show, setShow ] = useState( false );
    return <ModalContext.Provider value = { {
        show : ( value : boolean ) => setShow( value )
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
            <div className = "modal-dialog modal-dialog-centered">
                <div className = "modal-content">
                    <div className = "modal-header">
                        <h4 className = "modal-title" id = "myCenterModalLabel">Center modal</h4>
                        <button type = "button"
                                className = "btn-close"
                                onClick = { () => {
                                    setShow( false )
                                } }></button>
                    </div>
                    <div className = "modal-body">
                        <h5>Overflowing text to show scroll behavior</h5>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                           egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                           vel
                           augue laoreet rutrum faucibus dolor auctor.</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
