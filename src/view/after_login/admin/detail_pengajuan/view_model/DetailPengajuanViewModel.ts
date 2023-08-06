import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DetailPengajuanRepository } from "@/repository/admin/detail_pengajuan_repository/DetailPengajuanRepository";
import { ResponseDetailEntity } from "@/repository/admin/detail_pengajuan_repository/entity/ResponseDetailEntity";
import { ModalContext } from "@/application/component/modal/ModalContext";
import { VendorRepository } from "@/repository/vendor/list_vendor/VendorRepository";
import { ModelVendor } from "@/view/after_login/admin/daftar_vendor/model/ModelVendor";
import { ModelTerimaPengajuan } from "@/view/after_login/admin/detail_pengajuan/model/ModelTerimaPengajuan";
import { RepositoryTerimaPengajuan } from "@/repository/admin/terima_pengajuan/RepositoryTerimaPengajuan";
import { RepositoryProsesAdmin } from "@/repository/admin/proses_admin/RepositoryProsesAdmin";
import { RepositoryTolakPengajuan } from "@/repository/admin/tolak_pengajuan/RepositoryTolakPengajuan";
import { ModelSelesaiPengajaun } from "@/view/after_login/admin/detail_pengajuan/model/ModelSelesaiPengajaun";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModeTolakPengajuan } from "@/view/after_login/admin/detail_pengajuan/model/ModelTolakPengajuan";


export const DetailPengajuanViewModel = () => {
    const modal = useContext( ModalContext );

    const [ detailPengajuan, setDetailPengajuan ] = useState<ResponseDetailEntity>();

    const pathname = usePathname();
    const getId = () => {
        const splitPath = pathname.split( '/' );
        const id = splitPath[ splitPath.length - 1 ];
        return parseInt( id );
    }

    const getDetailData = async () => {
        const id = getId();
        const resp = await DetailPengajuanRepository( id );
        if ( resp !== null ) {
            setDetailPengajuan( resp );
        }
    }

    const [ vendor, setVendor ] = useState<ModelVendor[]>( [] );

    const getVendor = async () => {
        const resp = await VendorRepository();
        if ( resp !== null ) {
            const dataVendor : ModelVendor[] = resp.data.map( ( item ) => {
                return {
                    id : item.id,
                    noVendor : item.no_vendor,
                    namaVendor : item.nama_vendor,
                    pemilikVendor : item.pemilik_vendor,
                    alamat : item.alamat,
                    telpon : item.telpon,
                    order : {
                        total : 0,
                        poor : 0,
                        veryPoor : 0,
                        veryGood : 0,
                        good : 0
                    }
                }
            } )
            const dataAdd : ModelVendor = {
                noVendor : "",
                namaVendor : "Pilih Vendor",
                id : 0,
                pemilikVendor : "",
                alamat : "",
                telpon : "",
                order : {
                    good : 0,
                    total : 0,
                    poor : 0,
                    veryGood : 0,
                }
            }
            setVendor( () => [ dataAdd, ...dataVendor ] );
        }
    };

    const [ terimaPengajuan, setTerimaPengajuan ] = useState<ModelTerimaPengajuan>();
    const patchPengajuan = async ( id : number, data : ModelTerimaPengajuan ) => {
        const resp = await RepositoryTerimaPengajuan( id, data );
        if ( resp !== null ) {
            modal.hide();
            getDetailData();
        }
    }

    const pengajuanSelesai = async ( dataSend : ModelSelesaiPengajaun ) => {
        const resp = await RepositoryProsesAdmin( getId(), dataSend );
        if ( resp !== null ) {
            modal.hide();
            getDetailData();
        }
    }

    const validationSchema = Yup.object().shape( {
        reason : Yup.string().required( 'Alasan harus di isi' ),
    } )

    const {
        register,
        handleSubmit,
        formState : { errors },
        reset,
        setValue,
        getValues,
    } = useForm<ModeTolakPengajuan>( {
        defaultValues : {
            reason : "",
        },
        resolver : yupResolver( validationSchema )
    } );

    const [ loadingTolak, setLoadingTolak ] = useState( false );

    const tolakPengajuan: SubmitHandler<ModeTolakPengajuan> = async (data) => {
        setLoadingTolak( true)
        const resp = await RepositoryTolakPengajuan( getId(), data.reason );
        if ( resp !== null ) {
            modal.hide();
            getDetailData();
        }
        setLoadingTolak( false )
    }

    useEffect( () => {
        getDetailData();
        getVendor();
        return () => {
        };
    }, [] );


    return {
        detailPengajuan,
        modal,
        vendor,
        patchPengajuan,
        terimaPengajuan,
        setTerimaPengajuan,
        pengajuanSelesai,
        tolakPengajuan,
        register,
        handleSubmit,
        errors,
        reset,
        setValue,
        getValues,
        loadingTolak
    }
}
