import { useEffect, useState } from "react";
import { ModelDaftarPenhajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelDaftarPenhajuan";
import {
    DatumResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";
import { EnumStatus } from "@/utils/enum/status/EnumStatus";
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

    const getListPengajuan = async () => {
        setLoading( true );
        const response = await DaftarPengajuanAtasanRepository()
        if ( response !== null ) {
            const dataList : ModelDaftarPenhajuan[] = response.data.map( ( item : DatumResponsePengajuanEntity ) => {
                const status = item.status ?? '';
                return {
                    id : item.id,//item.id ?? 0,
                    namaBarang : item.pengajuan_name ?? '',
                    namaPemohon : item.pengajuan_name,//item.vendor ?? '',
                    tanggalPengajuan : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                    departemen : 'Departemen',//item.departemen ?? ''
                    prioritas : item.prioritas === 'High' ? EnumPrioritas.high : item.prioritas === 'Medium' ? EnumPrioritas.medium : EnumPrioritas.low,
                    status : StatusFormat.getStatus( item.status ?? '' ),
                }
            } );
            setListPengajuan( dataList );
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
        getListPengajuan();
        return () => {
        };
    }, [] );


    return {
        listPengajuan,
        loading,
        searchPengajuan,
        searchDataPengajuan,
        search, setSearch,
    }
}
