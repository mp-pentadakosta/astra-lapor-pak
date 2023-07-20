"use client";
import {FaAngleDoubleDown} from "react-icons/fa";
import React from "react";
import {FaPlus} from "react-icons/fa";
import {
    DaftarPengajuanUserViewModel
} from "@/view/after_login/user/daftar_pengajuan/view_model/DaftarPengajuanUserViewModel";
import {TableDaftarPengajaun} from "@/utils/component/table/TableDaftarPengajaun";
import {useRouter} from "next/navigation";


export const DaftarPengajuanUserView = () => {

    const router = useRouter()

    const {
        modal,
        listPengajuan,
        loading,
        searchPengajuan,
        searchDataPengajuan,
        search,
        setSearch,
        getListPengajuan,
        page,
        setPage,
    } = DaftarPengajuanUserViewModel();


    return <section className="content">
        <div className="row">
            <div className="col-12 col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Daftar Pengajuan</h5>
                        <div className="mb-0 card-subtitle text-muted">
                            <button type="button" className="btn btn-primary" onClick={() => {
                                router.push('/user/tambah-pengajuan')
                            }}>
                                <FaPlus style={{
                                    marginRight: '0.5rem'
                                }}/>
                                Tambah Pengajaun
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <input type="text"
                                               className="form-control"
                                               id="nama"
                                               onChange={(e) => {
                                                   setSearch(e.target.value);
                                                   searchDataPengajuan(e.target.value);
                                               }}
                                               placeholder="Cari..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TableDaftarPengajaun
                            role={'user'}
                            loading={loading}
                            listPengajuan={search !== '' ? searchPengajuan : listPengajuan}/>
                        <div className="row mt-20">
                            <div className="col-12 text-center">
                                <button type="button"
                                        onClick={() => {
                                            setPage(page + 1);
                                            getListPengajuan(page, 10);
                                        }}
                                        className="btn btn-info-light ajax"
                                        title="">
                                    <FaAngleDoubleDown style={{
                                        marginRight: "5px"
                                    }}/>
                                    Cari Lagi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}
