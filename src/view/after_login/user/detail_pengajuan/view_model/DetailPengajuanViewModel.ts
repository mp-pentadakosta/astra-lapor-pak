import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ResponseDetailEntity } from "@/repository/admin/detail_pengajuan_repository/entity/ResponseDetailEntity";
import { ModalContext } from "@/application/component/modal/ModalContext";
import {
    DetailPengajuanUserRepository
} from "@/repository/user/detail_pengajuan_repository/DetailPengajuanUserRepository";
import RatingRepository from "@/repository/rating/RatingRepository";


export const DetailPengajuanUserViewModel = () => {
    const modal = useContext( ModalContext );
    const pathname = usePathname();

    const [ detailPengajuan, setDetailPengajuan ] = useState<ResponseDetailEntity>();

    const [ rating, setRating ] = useState( 0 );

    const [ status, setStatus ] = useState( false );

    const getId = () => {
        const splitPath = pathname.split( '/' );
        const id = splitPath[ splitPath.length - 1 ];
        return parseInt( id );
    }

    const getDetailData = async () => {
        const id = getId();
        const resp = await DetailPengajuanUserRepository( id );
        if ( resp !== null ) {
            setDetailPengajuan( resp );
            setRating( resp.data.detail_rating?.rating ?? 0)
            if ( resp.data.status === 'Selesai' ){
                setStatus( true );
            }
        }
    }

    const giveRating = async () => {
        const id = getId();
        await RatingRepository.giveRating( id,rating );
    }

    useEffect( () => {
        getDetailData();
        return () => {
        };
    }, [] );


    return {
        detailPengajuan,
        modal,
        rating,
        setRating,
        giveRating,
        status,
    }
}
