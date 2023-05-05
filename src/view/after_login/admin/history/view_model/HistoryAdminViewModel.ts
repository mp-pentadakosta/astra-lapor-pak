import { RepositoryHistory } from "@/repository/admin/history/RepositoryHistory";
import { useEffect, useState } from "react";
import { DatumResponseHistoryEntity } from "@/repository/admin/history/entity/ResponseHistoryEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import xlsx from "json-as-xlsx";
import { toast } from "react-toastify";
import FormatCurrency from "@/utils/utils/Currency/FormatCurrency";
import { ModelDateHistory } from "@/view/after_login/admin/history/model/ModelDateHistory";


export const HistoryAdminViewModel = () => {

    const [ loading, setLoading ] = useState( false );

    const [ history, setHistory ] = useState<DatumResponseHistoryEntity[]>( [] );

    const [ searchHistory, setSearchHistory ] = useState<DatumResponseHistoryEntity[]>( [] );

    const dateN = new Date()
    const dateNow = new Date( dateN.getTime() )
    const dateMinusOneWeek = new Date( dateN.getTime() - (7 * 24 * 60 * 60 * 1000) )

    const [ date, setDate ] = useState<ModelDateHistory>( {
        startDate : FormatDate.dateStringToSend( dateMinusOneWeek.toUTCString() ),
        endDate : FormatDate.dateStringToSend( dateNow.toUTCString() )
    } );

    const [ searchData, setSearchData ] = useState( '' );

    const getSearchHistory = ( value : string ) => {
        const search = history.filter( ( item ) => {
            return item.pengajuan_name.toLowerCase().includes( value.toLowerCase() )
        } )

        setSearchHistory( search )

    }
    const getHistory = async ( tglMulai : string, tglSelesai : string ) => {
        // console.log( tglMulai, tglSelesai )
        setLoading( true )
        const resp = await RepositoryHistory( tglMulai, tglSelesai )
        if ( resp !== null ) {
            setHistory( resp.data )
        }
        setLoading( false )
    }

    const [ loadingExcel, setLoadingExcel ] = useState( false );

    const downloadExcel = async ( tglMulai : string, tglSelesai : string ) => {
        setLoadingExcel( true )
        const resp = await RepositoryHistory( tglMulai, tglSelesai )

        if ( resp === null ) {
            toast.error( "Data tidak ditemukan" )
            setLoadingExcel( false )
            return;
        }
        setLoadingExcel( false )

        let data = [
            {
                sheet : "Adults",
                columns : [
                    {
                        label : "No",
                        value : "no",
                    },
                    {
                        label : "Jenis Keluhan",
                        value : "pengajuan_name"
                    },
                    {
                        label : "Nama Pemohon",
                        value : "nama_pemohon"
                    },
                    {
                        label : "Departemen",
                        value : "departemen"
                    },
                    {
                        label : "Tanggal Pengajuan",
                        value : "tgl_pengajuan"
                    },
                    {
                        label : "Prioritas",
                        value : "prioritas"
                    },
                    {
                        label : "Nama Vendor",
                        value : "nama_vendor",
                    },
                    {
                        label : "Harga Perbaikan",
                        value : "harga_perbaikan",
                    },
                    {
                        label : "tgl. Estimasi Pekerjaan",
                        value : "tgl_estimasi_pekerjaan",
                    },
                    {
                        label : "tgl. Selesai Pekerjaan",
                        value : "tgl_selesai_pekerjaan",
                    },
                    {
                        label : "Rating",
                        value : "status",
                    },
                    {
                        label : "Status",
                        value : "status_pengajuan",
                    },
                ],
                content : resp.data.map( ( item : DatumResponseHistoryEntity, index : number ) => {
                    return {
                        "no" : index + 1,
                        "pengajuan_name" : item.pengajuan_name,
                        "nama_pemohon" : item.user.nama,
                        "departemen" : item.departemen,
                        "tgl_pengajuan" : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                        "prioritas" : item.prioritas,
                        "nama_vendor" : item.vendor === null ? '-' : item.vendor.nama_vendor,
                        "harga_perbaikan" : item.harga !== null ? FormatCurrency.numberToReal( item.harga ) : '-',
                        "tgl_estimasi_pekerjaan" : item.tanggal_mulai === null ? '-' : FormatDate.stringDateToStringLocale( item.tanggal_mulai ),
                        "tgl_selesai_pekerjaan" : item.tanggal_selesai === null ? '-' : FormatDate.stringDateToStringLocale( item.tanggal_selesai ),
                        "status" : item.rating === null ? '-' : item.rating,
                        "status_pengajuan" : item.status,
                    }
                } )
            },
        ]

        let settings = {
            fileName : `History Pengajuan ${ FormatDate.reverseStringDate( tglMulai ) } - ${ FormatDate.reverseStringDate( tglSelesai ) }`,
        }
        xlsx( data, settings )
    }

    useEffect( () => {

        getHistory( date.startDate, date.endDate )
        return () => {

        };
    }, [] );

    return {
        getHistory,
        history,
        loading,
        searchHistory,
        searchData,
        setSearchData,
        getSearchHistory,
        downloadExcel,
        loadingExcel,
        date,
        setDate
    }
}
