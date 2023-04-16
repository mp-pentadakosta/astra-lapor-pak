import { useContext, useEffect, useState } from "react";
import {
    DatumResponsePengajuanEntity
} from "@/repository/admin/daftar_pengajuan_repository/entity/ResponsePengajuanEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import { EnumPrioritas } from "@/utils/enum/prioritas/EnumPrioritas";
import { ModelSelectOption } from "@/application/component/input/model/ModelSelectOption";
import { RepositoryAddPengajuan } from "@/repository/user/add_pengajuan/RepositoryAddPengajuan";
import { ModelAddPengajuan } from "@/view/after_login/user/daftar_pengajuan/model/ModelAddPengajuan";
import { ModelDaftarPengajuanUser } from "@/view/after_login/user/daftar_pengajuan/model/ModelDaftarPengajuanUser";
import {
    DaftarPengajuanUserRepository
} from "@/repository/user/daftar_pengajuan_repository/DaftarPengajuanUserRepository";
import { useRouter } from "next/navigation";
import { ModalContext } from "@/application/component/modal/ModalContext";
import StatusFormat from "@/utils/utils/status/StatusFormat";


export const DaftarPengajuanUserViewModel = () => {
    const modal = useContext( ModalContext );
    const route = useRouter()
    const [ loading, setLoading ] = useState( false );

    const [ search, setSearch ] = useState( '' );

    const [ listPengajuan, setListPengajuan ] = useState<ModelDaftarPengajuanUser[]>( [] );

    const [ searchPengajuan, setSearchPengajuan ] = useState<ModelDaftarPengajuanUser[]>( [] );

    const [ addPengajuan, setAddPengajaun ] = useState<ModelAddPengajuan>();

    const [ page, setPage ] = useState( 1 );

    const listPrioritas : ModelSelectOption[] = [
        {
            key : '0',
            value : '',
            title : 'Pilih Prioritas',
        },
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

    const getListPengajuan = async ( page : number, limit : number ) => {
        setLoading( true );
        const response = await DaftarPengajuanUserRepository( page, limit )
        if ( response !== null ) {
            const dataList : ModelDaftarPengajuanUser[] = response.data.map( ( item : DatumResponsePengajuanEntity ) => {
                return {
                    id : item.id,//item.id ?? 0,
                    namaBarang : item.pengajuan_name ?? '',
                    namaPemohon : item.pengajuan_name,//item.vendor ?? '',
                    tanggalPengajuan : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                    departemen : item.departemen,//item.departemen ?? ''
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
        const data = listPengajuan.filter( ( item : ModelDaftarPengajuanUser ) => {
            return item.namaBarang.toLowerCase().includes( value.toLowerCase() )
        } );
        setSearchPengajuan( data );
    }

    const doAddPengajuan = async ( dataToSend : ModelAddPengajuan | undefined ) => {
        const lengthFoto = dataToSend?.foto?.length ?? 0;
        console.debug( 'dataToSend', dataToSend?.prioritas )
        if ( dataToSend?.deskripsi !== '' && lengthFoto > 0 && dataToSend?.namaPengajuan !== '' && dataToSend?.prioritas !== '' ) {
            if ( dataToSend?.prioritas !== undefined ) {
                await RepositoryAddPengajuan( dataToSend ?? {
                    prioritas : '',
                    namaPengajuan : '',
                    deskripsi : '',
                    foto : []
                } ).then( () => {
                    route.refresh()
                } );
                modal.hide();
            }
            else {
                alert( 'Prioritas tidak boleh kosong' )
            }

        }
        else {
            alert( 'Data tidak boleh kosong' );
        }
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
        addPengajuan, setAddPengajaun,
        doAddPengajuan,
        listPrioritas,
        getListPengajuan,
        page, setPage, modal
    }
}
