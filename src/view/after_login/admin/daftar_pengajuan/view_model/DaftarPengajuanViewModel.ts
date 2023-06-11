import { useEffect, useState } from "react";
import { ModelDaftarPenhajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelDaftarPenhajuan";
import { DaftarPengajuanRepository } from "@/repository/admin/daftar_pengajuan_repository/DaftarPengajuanRepository";
import {
    DatumResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";
import { ModelSelectOption } from "@/application/component/input/model/ModelSelectOption";
import StatusFormat from "@/utils/utils/status/StatusFormat";
import { ModelDaftarPengajuanUser } from "@/view/after_login/user/daftar_pengajuan/model/ModelDaftarPengajuanUser";
import { ModelFilterDate } from "@/view/after_login/admin/daftar_pengajuan/model/ModelFilterDate";
import { RepositoryHistory } from "@/repository/admin/history/RepositoryHistory";
import { toast } from "react-toastify";
import { DatumResponseHistoryEntity } from "@/repository/admin/history/entity/ResponseHistoryEntity";
import FormatCurrency from "@/utils/utils/Currency/FormatCurrency";
import xlsx from "json-as-xlsx";


export const DaftarPengajuanViewModel = () => {

    const [ loading, setLoading ] = useState( false );

    const [ search, setSearch ] = useState( '' );

    const [ listPengajuan, setListPengajuan ] = useState<ModelDaftarPenhajuan[]>( [] );

    const [ searchPengajuan, setSearchPengajuan ] = useState<ModelDaftarPenhajuan[]>( [] );

    const [ date, setDate ] = useState<ModelFilterDate>( {
        startDate : '',
        endDate : '',
    } );

    const listPrioritas : ModelSelectOption[] = [
        {
            key : '1',
            value : 'Low',
            title : 'Low',
        },
        {
            key : '2',
            value : 'Normal',
            title : 'Normal',
        },
        {
            key : '3',
            value : 'High',
            title : 'High',
        },
    ]
    const [ page, setPage ] = useState( 1 );
    const getListPengajuan = async ( page : number, limit : number ) => {
        setLoading( true );
        const startDate = date?.startDate ?? Date.now().toString();
        const endDate = date?.endDate ?? Date.now().toString();
        const response = await DaftarPengajuanRepository( page, limit, startDate,endDate )
        if ( response !== null ) {
            const dataList : ModelDaftarPengajuanUser[] = response.data.map( ( item : DatumResponsePengajuanEntity ) => {
                return {
                    id : item.id,//item.id ?? 0,
                    namaBarang : item.pengajuan_name ?? '',
                    namaPemohon : item.user.nama,//item.vendor ?? '',
                    tanggalPengajuan : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                    departemen : item.user.departemen,//item.departemen ?? ''
                    prioritas : item.prioritas === 'High' ? EnumPrioritas.high : item.prioritas === 'Medium' ? EnumPrioritas.medium : EnumPrioritas.low,
                    status : StatusFormat.getStatus( item.status ?? '' ),
                }
            } );
            setListPengajuan( ( prevState ) => [
                ...prevState,
                ...dataList
            ] );
            setDate(()=>{
                return {
                    startDate : startDate,
                    endDate : endDate,
                }
            })
        }
        setLoading( false );
    }

    const getListPengajuanFilter = async ( page : number, limit : number ) => {
        setLoading( true );
        const startDate = date?.startDate ?? Date.now().toString();
        const endDate = date?.endDate ?? Date.now().toString();
        const response = await DaftarPengajuanRepository( page, limit, startDate,endDate )
        if ( response !== null ) {
            const dataList : ModelDaftarPengajuanUser[] = response.data.map( ( item : DatumResponsePengajuanEntity ) => {
                return {
                    id : item.id,//item.id ?? 0,
                    namaBarang : item.pengajuan_name ?? '',
                    namaPemohon : item.user.nama,//item.vendor ?? '',
                    tanggalPengajuan : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                    departemen : item.user.departemen,//item.departemen ?? ''
                    prioritas : item.prioritas === 'High' ? EnumPrioritas.high : item.prioritas === 'Medium' ? EnumPrioritas.medium : EnumPrioritas.low,
                    status : StatusFormat.getStatus( item.status ?? '' ),
                }
            } );
            setListPengajuan( ( prevState ) => [
                ...dataList
            ] );
            setDate(()=>{
                return {
                    startDate : startDate,
                    endDate : endDate,
                }
            })
        }
        setLoading( false );
    }

    const searchDataPengajuan = ( value : string ) => {
        const data = listPengajuan.filter( ( item : ModelDaftarPenhajuan ) => {
            return item.namaBarang.toLowerCase().includes( value.toLowerCase() )
        } );
        setSearchPengajuan( data );
    }

    const [ loadingExcel, setLoadingExcel ] = useState( false );

    const downloadExcel = async ( tglMulai : string, tglSelesai : string ) => {
        setLoadingExcel( true )
        const resp = await DaftarPengajuanRepository(0,1000, tglMulai, tglSelesai )

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
                        label : "Status",
                        value : "status_pengajuan",
                    },
                ],
                content : resp.data.map( ( item : DatumResponsePengajuanEntity, index : number ) => {
                    return {
                        "no" : index + 1,
                        "pengajuan_name" : item.pengajuan_name,
                        "nama_pemohon" : item.user.nama,
                        "departemen" : item.departemen,
                        "tgl_pengajuan" : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                        "prioritas" : item.prioritas,
                        "nama_vendor" : item.vendor ?? '-' ,
                        "harga_perbaikan" : item.harga !== null ? FormatCurrency.numberToReal( item.harga ) : '-',
                        "tgl_estimasi_pekerjaan" : item.tanggal_mulai === null ? '-' : FormatDate.stringDateToStringLocale( item.tanggal_mulai ),
                        "tgl_selesai_pekerjaan" : item.tanggal_selesai === null ? '-' : FormatDate.stringDateToStringLocale( item.tanggal_selesai ),
                        "status_pengajuan" : item.status,
                    }
                } )
            },
        ]

        let settings = {
            fileName : `Daftar Pengajuan ${ FormatDate.reverseStringDate( tglMulai ) } - ${ FormatDate.reverseStringDate( tglSelesai ) }`,
        }
        xlsx( data, settings )
    }


    useEffect( () => {
        getListPengajuan( 0, 10 );
        return () => {
        };
    }, [] );


    return {
        listPengajuan,
        loading,
        searchPengajuan,
        searchDataPengajuan,
        search, setSearch,
        listPrioritas,
        page, setPage,
        getListPengajuan,
        date,
        setDate,
        getListPengajuanFilter,
        downloadExcel,
        loadingExcel
    }
}
