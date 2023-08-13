"use client";
import { FaSignOutAlt } from "react-icons/fa";
import { ModelLayout } from "@/application/layout/model/ModelLayout";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";


interface InterfaceSideBarRight {
    dataHeader : ModelLayout | undefined
    onTapClose : () => void;
}

export const SideBarRight = ( props : InterfaceSideBarRight ) => {
    const route = useRouter()


    return <div className = "modal modal-right fade show"
                tabIndex = { -1 }
                style = { {
                    display : 'block',
                } }>
        <div className = "modal-dialog">
            <div className = "modal-content slim-scroll3">
                <div className = "modal-body p-30 bg-white">
                    <div className = "d-flex align-items-center justify-content-between pb-30">
                        <h4 className = "m-0">Profile
                        </h4>
                        <div className = "btn btn-icon btn-danger-light btn-sm no-shadow"
                             data-bs-dismiss = "modal" onClick = { props.onTapClose }>
                            <FaSignOutAlt/>
                        </div>
                    </div>
                    <div>
                        <div className = "d-flex flex-row">
                            <div className = "">
                                <img src = { props.dataHeader?.foto }
                                     alt = "user"
                                     className = "rounded bg-primary w-150"
                                     width = { 100 }/>
                            </div>
                            <div className = "ps-20">
                                <h5 className = "mb-0">{ props.dataHeader?.name }</h5>
                                <p className = "my-5 text-fade">{ props.dataHeader?.departement.toLocaleUpperCase() }</p>
                                <a href = { `mailto:${ props.dataHeader?.email }` }>
                                    <span className = "icon-Mail-notification me-5 text-success">
                                        <span className = "path1"></span>
                                        <span className = "path2"></span>
                                    </span> { props.dataHeader?.email }
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className = "dropdown-divider my-30"></div>
                    <div onClick = { () => {
                        props.onTapClose()
                        route.push( props.dataHeader?.route ?? '/' )
                    } }
                         style = { {
                             cursor : 'pointer'
                         } }>

                        <div style = { { cursor : 'pointer' } }
                             onClick = { () => {
                                 props.onTapClose()
                                 deleteCookie( "token" )
                                 deleteCookie( "role" )
                                 route.replace( '/logout' )
                             } }
                             className = "d-flex align-items-center mb-30">
                            <div className = "me-15 bg-info-light h-50 w-50 l-h-60 rounded text-center">
                                    <span className = "icon-Attachment1 fs-24">
                                        <span className = "path1"></span>
                                        <span className = "path2"></span>
                                        <span className = "path3"></span>
                                        <span className = "path4"></span>
                                    </span>
                            </div>
                            <div className = "d-flex flex-column fw-500">
                                <div className = "text-dark hover-info mb-1 fs-16"
                                     style = { {
                                         cursor : 'pointer'
                                     } }>Logout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "dropdown-divider my-30"></div>
                </div>
            </div>
        </div>
    </div>
}
