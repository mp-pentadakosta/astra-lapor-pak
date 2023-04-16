import { useEffect, useState } from "react";
import { ModelDaftarPenhajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelDaftarPenhajuan";
import { DaftarPengajuanRepository } from "@/repository/admin/daftar_pengajuan_repository/DaftarPengajuanRepository";
import {
    DatumResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";
import { EnumStatus } from "@/utils/enum/status/EnumStatus";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";
import { ModelSelectOption } from "@/application/component/input/model/ModelSelectOption";
import StatusFormat from "@/utils/utils/status/StatusFormat";
import {
    DaftarPengajuanUserRepository
} from "@/repository/user/daftar_pengajuan_repository/DaftarPengajuanUserRepository";
import { ModelDaftarPengajuanUser } from "@/view/after_login/user/daftar_pengajuan/model/ModelDaftarPengajuanUser";


export const DaftarPengajuanViewModel = () => {

    const [ loading, setLoading ] = useState( false );

    const [ search, setSearch ] = useState( '' );

    const [ listPengajuan, setListPengajuan ] = useState<ModelDaftarPenhajuan[]>( [] );

    const [ searchPengajuan, setSearchPengajuan ] = useState<ModelDaftarPenhajuan[]>( [] );

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
        const response = await DaftarPengajuanRepository( page, limit )
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
        }
        setLoading( false );
    }

    const searchDataPengajuan = ( value : string ) => {
        const data = listPengajuan.filter( ( item : ModelDaftarPenhajuan ) => {
            return item.namaBarang.toLowerCase().includes( value.toLowerCase() )
        } );
        setSearchPengajuan( data );
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
    }
}
