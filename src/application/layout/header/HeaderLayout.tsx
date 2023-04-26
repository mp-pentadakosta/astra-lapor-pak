import { HeaderViewModel } from "@/application/layout/header/view_model/HeaderViewModel";
import Link from "next/link";
import useWindowSize from "@rooks/use-window-size";
import { useState } from "react";
import { SideBarRight } from "@/application/layout/sidebar/SideBarRight";


export const HeaderLayout = () => {

    const { header } = HeaderViewModel();

    const size = useWindowSize();

    let sizeWidth = size.innerWidth ?? 1000;

    const [ isOpenSideBarRight, setIsOpenSideBarRight ] = useState( false );

    return <>
        <header className = "main-header">
            <div className = "d-flex align-items-center logo-box justify-content-start">
                <Link href = { `${ header?.route }` } className = "logo">
                    {

                        sizeWidth > 768 ? <>
                                <div className = "logo-mini w-30">
                                <span className = "light-logo">
                                  <img src = "/img/img/logo-astra.png" alt = "logo"/>
                                </span>
                                    <span className = "dark-logo">
                                  <img src = "/img/img/logo-astra-full.png" alt = "logo"/>
                                </span>
                                </div>
                                <div className = "logo-lg">
                                <span className = "light-logo">
                                    <img src = "/img/img/logo-astra-full.png" alt = "logo"/>
                                </span>
                                    <span className = "dark-logo">
                                  <img src = "/img/img/logo-astra-full.png" alt = "logo"/>
                                </span>
                                </div>
                            </>
                            : <>
                                <div className = "logo-mini w-30">
                                </div>
                                <div className = "logo-lg">
                                </div>
                            </>
                    }
                </Link>
            </div>
            <nav className = "navbar navbar-static-top">
                <div className = "app-menu">
                    <ul className = "header-megamenu nav">
                        <li className = "btn-group nav-item">
                            <a href = "#"
                               className = "waves-effect waves-light nav-link push-btn btn-primary-light ms-0"
                               data-toggle = "push-menu"
                               role = "button">
                                <i data-feather = "menu"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className = "navbar-custom-menu r-side">
                    <ul className = "nav navbar-nav">
                        <li className = "btn-group d-md-inline-flex d-none">
                            <a href = "javascript:void(0)"
                               title = "skin Change"
                               className = "waves-effect skin-toggle waves-light">
                                <label className = "switch">
                                    <input type = "checkbox"
                                           data-mainsidebarskin = "toggle"
                                           id = "toggle_left_sidebar_skin"/>
                                    <span className = "switch-on"><i data-feather = "sun"></i></span>
                                    <span className = "switch-off"><i data-feather = "moon"></i></span>
                                </label>
                            </a>
                        </li>

                        <li className = "btn-group nav-item d-xl-inline-flex d-none">
                            <a href = "#"
                               data-provide = "fullscreen"
                               className = "waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                               title = "Full Screen">
                                <i data-feather = "maximize"></i>
                            </a>
                        </li>

                        <li className = "dropdown user user-menu">
                            <div onClick = { () => setIsOpenSideBarRight( true ) }
                                 className = "waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow"
                                 title = "User"
                                 data-bs-toggle = "modal"
                                 data-bs-target = "#quick_user_toggle">
                                <div className = "d-flex pt-1 align-items-center">
                                    <div className = "text-end me-10">
                                        <p className = "pt-5 fs-14 mb-0 fw-700">{ header?.name }</p>
                                        <small className = "fs-10 mb-0 text-uppercase text-mute">{ header?.departement }</small>
                                    </div>
                                    <img src = { header?.foto }
                                         className = "avatar rounded-circle bg-primary-light h-40 w-40"
                                         alt = ""/>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>

        {
            isOpenSideBarRight ?
                <SideBarRight dataHeader = { header }
                              onTapClose = { () => setIsOpenSideBarRight( false ) }/>
                : null
        }
    </>
}
