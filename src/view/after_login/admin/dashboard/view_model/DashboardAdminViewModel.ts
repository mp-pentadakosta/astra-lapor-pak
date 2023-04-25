import {EnumTipeDashboard} from "@/utils/enum/tipe_dashboard/EnumTipeDashboard";
import {ModelDashboardAdmin} from "@/view/after_login/admin/dashboard/model/ModelDashboardAdmin";
import {useEffect, useState} from "react";
import {DashboardAdminRepository} from "@/repository/admin/dashboard/DashboardAdminRepository";

export const DashboardAdminViewModel = () => {

    const [loading, setLoading] = useState(false);

    const [dashboard, setDashboard] = useState<ModelDashboardAdmin>();

    const getTotalPengajuan = async () => {
        const resp = await DashboardAdminRepository("admin", EnumTipeDashboard.totalPengajuan)
        if (resp !== null) {
            setDashboard({
                ...dashboard,
                pengajuanMingguIni: resp.data.jumlah.toString(),
            } as ModelDashboardAdmin)
        }
    }

    const getPengajuanDiterima = async () => {
        const resp = await DashboardAdminRepository("admin", EnumTipeDashboard.totalDiterima)
        if (resp !== null) {
            setDashboard((prevState) => {
                return {
                    ...prevState,
                    pengajuanDiterima: resp.data.jumlah.toString(),
                } as ModelDashboardAdmin
            })

        }
    }

    const getPengajuanDitinjau = async () => {
        const resp = await DashboardAdminRepository("admin", EnumTipeDashboard.totalDitijau)
        if (resp !== null) {
            // setDashboard((prevState) => {
            //     return {
            //         ...prevState,
            //         pengajuanDitolak: resp.data.jumlah.toString,
            //     } as ModelDashboardAdmin
            // })
        }
    }

    const getPengjuanDitolak = async () => {
        const resp = await DashboardAdminRepository("admin", EnumTipeDashboard.tolak)
        if (resp !== null) {
            setDashboard((prevState) => {
                return {
                    ...prevState,
                    pengajuanDitolak: resp.data.jumlah.toString(),
                } as ModelDashboardAdmin
            })
        }
    }

    const getPengjuanDiterima = async () => {
        const resp = await DashboardAdminRepository("admin", EnumTipeDashboard.totalDiterima)
        if (resp !== null) {
            setDashboard((prevState) => {
                return {
                    ...prevState,
                    totalVendor: resp.data.jumlah.toString(),
                } as ModelDashboardAdmin
            })
        }
    }

    useEffect(() => {
        getTotalPengajuan().then(() => {
            setLoading(true)
            getPengajuanDiterima().then(() => {
                getPengajuanDitinjau().then(() => {
                    getPengjuanDitolak().then(() => {
                        getPengjuanDiterima().then(() => {
                            setLoading(false)
                        })
                    })
                })
            })
        })
        return () => {

        };
    }, []);

    return {
        dashboard,
        loading,
    }
}
