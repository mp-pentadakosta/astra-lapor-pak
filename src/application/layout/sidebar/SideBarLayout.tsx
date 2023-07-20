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
                    </ul>

                </div>
            </div>
        </section>
    </aside>
}
