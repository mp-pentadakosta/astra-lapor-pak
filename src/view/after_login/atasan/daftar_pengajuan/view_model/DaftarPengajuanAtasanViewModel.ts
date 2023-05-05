import { useEffect, useState } from "react";
import { ModelDaftarPenhajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelDaftarPenhajuan";
import {
    DatumResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";
import {
    DaftarPengajuanAtasanRepository
} from "@/repository/atasan/daftar_pengajuan_repository/DaftarPengajuanAtasanRepository";
import StatusFormat from "@/utils/utils/status/StatusFormat";


export const DaftarPengajuanAtasanViewModel = () => {

    const [ loading, setLoading ] = useState( false );

    const [ search, setSearch ] = useState( '' );

    const [ listPengajuan, setListPengajuan ] = useState<ModelDaftarPenhajuan[]>( [] );

    const [ searchPengajuan, setSearchPengajuan ] = useState<ModelDaftarPenhajuan[]>( [] );

    const [ page, setPage ] = useState( 0 );

    const getListPengajuan = async ( pageData : number ) => {
        setLoading( true );
        const response = await DaftarPengajuanAtasanRepository( pageData )
        if ( response !== null ) {
            const dataList : ModelDaftarPenhajuan[] = response.data.map( ( item : DatumResponsePengajuanEntity ) => {
                return {
                    id : item.id,//item.id ?? 0,
                    namaBarang : item.pengajuan_name ?? '',
                    namaPemohon : item.user.nama,//item.vendor ?? '',
                    tanggalPengajuan : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                    departemen : item.departemen,//item.departemen ?? ''
                    prioritas : item.prioritas === 'High' ? EnumPrioritas.high : item.prioritas === 'Medium' ? EnumPrioritas.medium : EnumPrioritas.low,
                    status : StatusFormat.getStatus( item.status ?? '' ),
                }
            } );
            // console.log( 'dataList', dataList )
            setListPengajuan( ( prevState ) =>
                [
                    ...prevState,
                    ...dataList
                ]
            );
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
        getListPengajuan( page );
        return () => {
        };
    }, [] );


    return {
        listPengajuan,
        loading,
        searchPengajuan,
        searchDataPengajuan,
        search, setSearch,
        setPage,
        page,
        getListPengajuan
    }
}
