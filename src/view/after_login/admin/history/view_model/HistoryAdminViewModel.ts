import {RepositoryHistory} from "@/repository/admin/history/RepositoryHistory";
import {useEffect, useState} from "react";
import {DatumResponseHistoryEntity} from "@/repository/admin/history/entity/ResponseHistoryEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";


export const HistoryAdminViewModel = () => {

    const [loading, setLoading] = useState(false);

    const [history, setHistory] = useState<DatumResponseHistoryEntity[]>([]);

    const [searchHistory, setSearchHistory] = useState<DatumResponseHistoryEntity[]>([]);

    const [searchData, setSearchData] = useState('');

    const getSearchHistory = (value: string) => {
        const search = history.filter((item) => {
            return item.pengajuan_name.toLowerCase().includes(value.toLowerCase())
        })

        setSearchHistory(search)

    }
    const getHistory = async (tglMulai: string, tglSelesai: string) => {
        // console.log( tglMulai, tglSelesai )
        setLoading(true)
        const resp = await RepositoryHistory(tglMulai, tglSelesai)
        if (resp !== null) {
            setHistory(resp.data)
        }
        setLoading(false)
    }

    const downloadExcel = async (tglMulai: string, tglSelesai: string) => {

    }

    useEffect(() => {
        const date = new Date()
        const dateNow = new Date(date.getTime())
        const dateMinusOneWeek = new Date(date.getTime() - (7 * 24 * 60 * 60 * 1000))
        getHistory(FormatDate.dateStringToSend(dateMinusOneWeek.toUTCString()), FormatDate.dateStringToSend(dateNow.toUTCString()))
        return () => {

        };
    }, []);

    return {
        getHistory,
        history,
        loading,
        searchHistory,
        searchData,
        setSearchData,
        getSearchHistory
    }
}
