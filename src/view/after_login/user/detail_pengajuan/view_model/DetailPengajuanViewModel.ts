import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ResponseDetailEntity } from "@/repository/admin/detail_pengajuan_repository/entity/ResponseDetailEntity";
import { ModalContext } from "@/application/component/modal/ModalContext";
import {
    DetailPengajuanAtasanRepository
} from "@/repository/atasan/detail_pengajuan_repository/DetailPengajuanAtasanRepository";
import {
    DetailPengajuanUserRepository
} from "@/repository/user/detail_pengajuan_repository/DetailPengajuanUserRepository";


export const DetailPengajuanUserViewModel = () => {
    const modal = useContext( ModalContext );
    const pathname = usePathname();

    const [ detailPengajuan, setDetailPengajuan ] = useState<ResponseDetailEntity>();


    const getId = () => {
        const splitPath = pathname.split( '/' );
        const id = splitPath[ splitPath.length - 1 ];
        console.log( 'id', id )
        return parseInt( id );
    }

    const getDetailData = async () => {
        const id = getId();
        const resp = await DetailPengajuanUserRepository( id );
        if ( resp !== null ) {
            setDetailPengajuan( resp );
        }
    }

    useEffect( () => {
        getDetailData();
        return () => {
        };
    }, [] );


    return {
        detailPengajuan,
        modal,
    }
}
