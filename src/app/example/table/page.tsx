import { Breadcrumb } from "@/application/component/Breadcrumb";
import { TableView } from "@/view/example/table_view/TableView";
import Head from "next/head";


export default function Table() {
    return <div className = "content-wrapper">
        <div className = "container-full">

            <Breadcrumb/>
            <TableView/>

        </div>
    </div>
}
