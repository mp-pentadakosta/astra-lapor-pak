import { useEffect, useState } from "react";
import {
    DatumResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";
import { EnumStatus } from "@/utils/enum/status/EnumStatus";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";
import { ModelSelectOption } from "@/application/component/input/model/ModelSelectOption";
import { RepositoryAddPengajuan } from "@/repository/user/add_pengajuan/RepositoryAddPengajuan";
import { ModelAddPengajuan } from "@/view/after_login/user/daftar_pengajuan/model/ModelAddPengajuan";
import { ModelDaftarPengajuanUser } from "@/view/after_login/user/daftar_pengajuan/model/ModelDaftarPengajuanUser";
import {
    DaftarPengajuanUserRepository
} from "@/repository/user/daftar_pengajuan_repository/DaftarPengajuanUserRepository";


export const DaftarPengajuanUserViewModel = () => {

    const [ loading, setLoading ] = useState( false );

    const [ search, setSearch ] = useState( '' );

    const [ listPengajuan, setListPengajuan ] = useState<ModelDaftarPengajuanUser[]>( [] );

    const [ searchPengajuan, setSearchPengajuan ] = useState<ModelDaftarPengajuanUser[]>( [] );

    const [ addPengajuan, setAddPengajaun ] = useState<ModelAddPengajuan>();

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

    const getListPengajuan = async () => {
        setLoading( true );
        const response = await DaftarPengajuanUserRepository()
        if ( response !== null ) {
            const dataList : ModelDaftarPengajuanUser[] = response.data.map( ( item : DatumResponsePengajuanEntity ) => {
                const status = item.status ?? '';
                return {
                    id : item.id,//item.id ?? 0,
                    namaBarang : item.pengajuan_name ?? '',
                    namaPemohon : item.pengajuan_name,//item.vendor ?? '',
                    tanggalPengajuan : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                    departemen : 'Departemen',//item.departemen ?? ''
                    prioritas : item.prioritas === 'High' ? EnumPrioritas.high : item.prioritas === 'Medium' ? EnumPrioritas.medium : EnumPrioritas.low,
                    status : status === 'Selesai' ? EnumStatus.selesai : status === 'Proses Vendor' ? EnumStatus.dalamProses : EnumStatus.undefined
                }
            } );
            setListPengajuan( dataList );
        }
        setLoading( false );
    }

    const searchDataPengajuan = ( value : string ) => {
        const data = listPengajuan.filter( ( item : ModelDaftarPengajuanUser ) => {
            return item.namaBarang.toLowerCase().includes( value.toLowerCase() )
        } );
        setSearchPengajuan( data );
    }

    const doAddPengajuan = async ( dataToSend : ModelAddPengajuan | undefined ) => {
        // console.log( dataToSend )
        const lengthFoto = dataToSend?.foto?.length ?? 0;
        if ( dataToSend?.deskripsi !== '' && lengthFoto > 0 && dataToSend?.namaPengajuan !== '' && dataToSend?.prioritas !== '' ) {
            await RepositoryAddPengajuan( dataToSend ?? {
                prioritas : '',
                namaPengajuan : '',
                deskripsi : '',
                foto : []
            } );
        }
        else {
            alert( 'Data tidak boleh kosong' );
        }
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
        addPengajuan, setAddPengajaun,
        doAddPengajuan,
        listPrioritas
    }
}
