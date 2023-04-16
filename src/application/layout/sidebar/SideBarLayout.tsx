import Link from "next/link";
import { useState } from "react";
import { SideBarViewModel } from "@/application/layout/sidebar/view_model/SideBarViewModel";


export const SideBarLayout = () => {

    const { sideBarItemsAdmin, header } = SideBarViewModel();
    const [ active, setActive ] = useState( header?.route ?? '/' );


    return <aside className = "main-sidebar">
        <section className = "sidebar position-relative">
            <div className = "multinav">
                <div className = "multinav-scroll" style = { {
                    height : "97%",
                } }>
                    <ul className = "sidebar-menu" data-widget = "tree">
                        {
                            sideBarItemsAdmin.map( ( item, index ) => {
                                return <li key = { index }
                                           className = { item.route === active ? 'active' : '' }>
                                    <Link href = { `${ header?.route + item.route }` } onClick = { () => {
                                        setActive( item.route )
                                    } }>
                                        <i data-feather = { item.icon }></i>
                                        <span>{ item.title }</span>
                                    </Link>
                                </li>
                            } )
                        }
                        {/*<li className = { `active` }>*/ }
                        {/*    <Link href = "/">*/ }
                        {/*        <i data-feather = "home"></i>*/ }
                        {/*        <span>Dashboard</span>*/ }
                        {/*    </Link>*/ }
                        {/*</li>*/ }
                        {/*<li className = { `` }>*/ }
                        {/*    <Link href = "/table">*/ }
                        {/*        <i data-feather = "home"></i>*/ }
                        {/*        <span>Table</span>*/ }
                        {/*    </Link>*/ }
                        {/*</li>*/ }
                        {/*<li className = "treeview">*/ }
                        {/*    <Link href = "#">*/ }
                        {/*        <i data-feather = "edit"></i>*/ }
                        {/*        <span>Features</span>*/ }
                        {/*        <span className = "pull-right-container">*/ }
                        {/*          <i className = "fa fa-angle-right pull-right"></i>*/ }
                        {/*        </span>*/ }
                        {/*    </Link>*/ }
                        {/*    <ul className = "treeview-menu">*/ }
                        {/*        <li className = "treeview">*/ }
                        {/*            <Link href = "#">*/ }
                        {/*                <i className = "icon-Commit">*/ }
                        {/*                    <span className = "path1"></span>*/ }
                        {/*                    <span className = "path2"></span>*/ }
                        {/*                </i>*/ }
                        {/*                Card*/ }
                        {/*                <span className = "pull-right-container">*/ }
                        {/*                    <i className = "fa fa-angle-right pull-right"></i>*/ }
                        {/*                </span>*/ }
                        {/*            </Link>*/ }
                        {/*            <ul className = "treeview-menu">*/ }
                        {/*                <li>*/ }
                        {/*                    <Link href = "">*/ }
                        {/*                        <i className = "icon-Commit">*/ }
                        {/*                            <span className = "path1"></span>*/ }
                        {/*                            <span className = "path2"></span>*/ }
                        {/*                        </i>*/ }
                        {/*                        User Card*/ }
                        {/*                    </Link>*/ }
                        {/*                </li>*/ }
                        {/*            </ul>*/ }
                        {/*        </li>*/ }
                        {/*    </ul>*/ }
                        {/*</li>*/ }
                    </ul>

                </div>
            </div>
        </section>
    </aside>
}
