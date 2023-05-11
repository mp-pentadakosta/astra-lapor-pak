import { DetailPengajuanView } from "@/view/after_login/admin/detail_pengajuan/view/DetailPengajuanView";
import React from "react";


export default function DetailPengajuan() {
    return <div className = "content-wrapper">
        <div className = "container-full" style = { {
            height : '100vh',
            overflowY : 'scroll'
        } }>
            <DetailPengajuanView/>
            <div style = { {
                marginTop : '100px'
            } }></div>
        </div>
    </div>
}
