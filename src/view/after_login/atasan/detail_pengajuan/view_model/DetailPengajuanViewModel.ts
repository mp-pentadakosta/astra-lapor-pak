import {useContext, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {ResponseDetailEntity} from "@/repository/admin/detail_pengajuan_repository/entity/ResponseDetailEntity";
import {ModalContext} from "@/application/component/modal/ModalContext";
import {
    DetailPengajuanAtasanRepository
} from "@/repository/atasan/detail_pengajuan_repository/DetailPengajuanAtasanRepository";
import {RepositoryKomentar} from "@/repository/atasan/komentar/RepositoryKomentar";


export const DetailPengajuanAtasanViewModel = () => {
    const modal = useContext(ModalContext);
    const pathname = usePathname();

    const [detailPengajuan, setDetailPengajuan] = useState<ResponseDetailEntity>();

    const [ status, setStatus ] = useState( false );


    const getId = () => {
        const splitPath = pathname.split('/');
        const id = splitPath[splitPath.length - 1];
        console.log('id', id)
        return parseInt(id);
    }

    const getDetailData = async () => {
        const id = getId();
        const resp = await DetailPengajuanAtasanRepository(id);
        if (resp !== null) {
            setDetailPengajuan(resp);
            if ( resp.data.status === 'Selesai' ){
                setStatus( true );
            }
        }
    }

    const postKomentar = async (data: string) => {
        const resp = await RepositoryKomentar(getId(), data);
        if (resp !== null) {
            modal.hide();
            getDetailData();
        }
    }


    useEffect(() => {
        getDetailData();
        return () => {
        };
    }, []);


    return {
        detailPengajuan,
        modal,
        postKomentar,
        status,
    }
}
