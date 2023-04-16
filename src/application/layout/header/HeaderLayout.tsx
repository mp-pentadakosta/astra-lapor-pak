import { HeaderViewModel } from "@/application/layout/header/view_model/HeaderViewModel";
import Link from "next/link";
import useWindowSize from "@rooks/use-window-size";


export const HeaderLayout = () => {

    const { header } = HeaderViewModel();

    const size = useWindowSize();

    console.log( size.innerWidth )
    let sizeWidth = size.innerWidth ?? 1000;

    // if ( sizeWidth < 768 ) {
    //     alert( "lebih kecil" )
    // }

    return <header className = "main-header">
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
                    {/*<li className = "dropdown notifications-menu btn-group">*/ }
                    {/*    <a href = "#"*/ }
                    {/*       className = "waves-effect waves-light btn-primary-light svg-bt-icon bg-transparent"*/ }
                    {/*       data-bs-toggle = "dropdown"*/ }
                    {/*       title = "Notifications">*/ }
                    {/*        <i data-feather = "bell"></i>*/ }
                    {/*        <div className = "pulse-wave"></div>*/ }
                    {/*    </a>*/ }
                    {/*    <ul className = "dropdown-menu animated bounceIn">*/ }
                    {/*        <li className = "header">*/ }
                    {/*            <div className = "p-20">*/ }
                    {/*                <div className = "flexbox">*/ }
                    {/*                    <div>*/ }
                    {/*                        <h4 className = "mb-0 mt-0">Notifications</h4>*/ }
                    {/*                    </div>*/ }
                    {/*                    <div>*/ }
                    {/*                        <a href = "#" className = "text-danger">Clear All</a>*/ }
                    {/*                    </div>*/ }
                    {/*                </div>*/ }
                    {/*            </div>*/ }
                    {/*        </li>*/ }
                    {/*        <li>*/ }
                    {/*            <ul className = "menu sm-scrol">*/ }
                    {/*                <li>*/ }
                    {/*                    <a href = "#">*/ }
                    {/*                        <i className = "fa fa-users text-info"></i> Curabitur id eros quis nunc*/ }
                    {/*                                                                    suscipit blandit.*/ }
                    {/*                    </a>*/ }
                    {/*                </li>*/ }
                    {/*            </ul>*/ }
                    {/*        </li>*/ }
                    {/*        <li className = "footer">*/ }
                    {/*            <a href = "#">View all</a>*/ }
                    {/*        </li>*/ }
                    {/*    </ul>*/ }
                    {/*</li>*/ }

                    {/*<li className = "btn-group d-xl-inline-flex d-none">*/ }
                    {/*    <a href = "#"*/ }
                    {/*       className = "waves-effect waves-light nav-link btn-primary-light svg-bt-icon dropdown-toggle"*/ }
                    {/*       data-bs-toggle = "dropdown">*/ }
                    {/*        <img className = "rounded-circle"*/ }
                    {/*             src = "https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/usa.svg"*/ }
                    {/*             alt = ""/>*/ }
                    {/*    </a>*/ }
                    {/*    <div className = "dropdown-menu">*/ }
                    {/*        <a className = "dropdown-item my-5" href = "#"><img className = "w-20 rounded me-10"*/ }
                    {/*                                                            src = "https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/usa.svg"*/ }
                    {/*                                                            alt = ""/> English</a>*/ }
                    {/*        <a className = "dropdown-item my-5" href = "#"><img className = "w-20 rounded me-10"*/ }
                    {/*                                                            src = "https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/spain.svg"*/ }
                    {/*                                                            alt = ""/> Spanish</a>*/ }
                    {/*        <a className = "dropdown-item my-5" href = "#"><img className = "w-20 rounded me-10"*/ }
                    {/*                                                            src = "https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/ger.svg"*/ }
                    {/*                                                            alt = ""/> German</a>*/ }
                    {/*        <a className = "dropdown-item my-5" href = "#"><img className = "w-20 rounded me-10"*/ }
                    {/*                                                            src = "https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/jap.svg"*/ }
                    {/*                                                            alt = ""/> Japanese</a>*/ }
                    {/*        <a className = "dropdown-item my-5" href = "#"><img className = "w-20 rounded me-10"*/ }
                    {/*                                                            src = "https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/fra.svg"*/ }
                    {/*                                                            alt = ""/> French</a>*/ }
                    {/*    </div>*/ }
                    {/*</li>*/ }

                    <li className = "btn-group nav-item d-xl-inline-flex d-none">
                        <a href = "#"
                           data-provide = "fullscreen"
                           className = "waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                           title = "Full Screen">
                            <i data-feather = "maximize"></i>
                        </a>
                    </li>

                    <li className = "dropdown user user-menu">
                        <a href = "#"
                           className = "waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow"
                           title = "User"
                           data-bs-toggle = "modal"
                           data-bs-target = "#quick_user_toggle">
                            <div className = "d-flex pt-1 align-items-center">
                                <div className = "text-end me-10">
                                    <p className = "pt-5 fs-14 mb-0 fw-700">{ header?.name }</p>
                                    <small className = "fs-10 mb-0 text-uppercase text-mute">{ header?.departement }</small>
                                </div>
                                <img src = "/images/avatar/avatar-13.png"
                                     className = "avatar rounded-circle bg-primary-light h-40 w-40"
                                     alt = ""/>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
}
