import { DetailPengajuanUserView } from "@/view/after_login/user/detail_pengajuan/view/DetailPengajuanView";


export default function DetailPengajuan() {
    return <div className = "content-wrapper">
        <div className = "container-full" style={{
            maxHeight: "600px",
            overflowY: "scroll",
        }}>

            <DetailPengajuanUserView/>

        </div>
    </div>
}
