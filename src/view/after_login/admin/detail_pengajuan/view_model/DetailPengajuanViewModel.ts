import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DetailPengajuanRepository } from "@/repository/admin/detail_pengajuan_repository/DetailPengajuanRepository";
import { ResponseDetailEntity } from "@/repository/admin/detail_pengajuan_repository/entity/ResponseDetailEntity";


export const DetailPengajuanViewModel = () => {
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
        const resp = await DetailPengajuanRepository( id );
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
        detailPengajuan
    }
}
