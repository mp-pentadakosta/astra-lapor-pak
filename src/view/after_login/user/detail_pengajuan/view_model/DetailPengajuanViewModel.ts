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

    const giveRating = async () => {
         await RatingRepository.giveRating( rating );
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
        giveRating
    }
}
