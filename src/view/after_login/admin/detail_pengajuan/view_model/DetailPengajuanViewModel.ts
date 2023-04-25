import {useContext, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {DetailPengajuanRepository} from "@/repository/admin/detail_pengajuan_repository/DetailPengajuanRepository";
import {ResponseDetailEntity} from "@/repository/admin/detail_pengajuan_repository/entity/ResponseDetailEntity";
import {ModalContext} from "@/application/component/modal/ModalContext";
import {VendorRepository} from "@/repository/vendor/list_vendor/VendorRepository";
import {ModelVendor} from "@/view/after_login/admin/daftar_vendor/model/ModelVendor";
import {ModelTerimaPengajuan} from "@/view/after_login/admin/detail_pengajuan/model/ModelTerimaPengajuan";
import {RepositoryTerimaPengajuan} from "@/repository/admin/terima_pengajuan/RepositoryTerimaPengajuan";
import {RepositoryProsesAdmin} from "@/repository/admin/proses_admin/RepositoryProsesAdmin";
import {RepositoryTolakPengajuan} from "@/repository/admin/tolak_pengajuan/RepositoryTolakPengajuan";
import {router} from "next/client";


export const DetailPengajuanViewModel = () => {
    const modal = useContext(ModalContext);

    const [detailPengajuan, setDetailPengajuan] = useState<ResponseDetailEntity>();

    const pathname = usePathname();
    const getId = () => {
        const splitPath = pathname.split('/');
        const id = splitPath[splitPath.length - 1];
        console.log('id', id)
        return parseInt(id);
    }

    const getDetailData = async () => {
        const id = getId();
        const resp = await DetailPengajuanRepository(id);
        if (resp !== null) {
            setDetailPengajuan(resp);
        }
    }

    const [vendor, setVendor] = useState<ModelVendor[]>([]);

    const getVendor = async () => {
        const resp = await VendorRepository();
        if (resp !== null) {
            const dataVendor: ModelVendor[] = resp.data.map((item) => {
                return {
                    id: item.id,
                    noVendor: item.no_vendor,
                    namaVendor: item.nama_vendor,
                    pemilikVendor: item.pemilik_vendor,
                    alamat: item.alamat,
                    telpon: item.telpon,
                }
            })
            setVendor(dataVendor);
        }
    };

    const [terimaPengajuan, setTerimaPengajuan] = useState<ModelTerimaPengajuan>();
    const patchPengajuan = async (id: number, data: ModelTerimaPengajuan) => {
        const resp = await RepositoryTerimaPengajuan(id, data);
        modal.hide();
    }

    const pengajuanSelesai = async () => {
        const resp = await RepositoryProsesAdmin(getId());
        modal.hide();
        router.reload()
    }

    const tolakPengajuan = async () => {
        const resp = await RepositoryTolakPengajuan(getId());
        modal.hide();
    }

    useEffect(() => {
        getDetailData();
        getVendor();
        return () => {
        };
    }, []);


    return {
        detailPengajuan,
        modal,
        vendor,
        patchPengajuan,
        terimaPengajuan,
        setTerimaPengajuan,
        pengajuanSelesai,
        tolakPengajuan
    }
}
