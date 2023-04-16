"use client";
import { TableDaftarPengajaun } from "@/view/after_login/admin/daftar_pengajuan/component/TableDaftarPengajaun";
import {
    DaftarPengajuanViewModel
} from "@/view/after_login/admin/daftar_pengajuan/view_model/DaftarPengajuanViewModel";
import { FaAngleDoubleDown } from "react-icons/fa";
import React, { useContext } from "react";
import { ModalContext } from "@/application/component/modal/ModalContext";


export const DaftarPengajuanView = () => {
    const modal = useContext( ModalContext );
    const {
        listPengajuan,
        loading,
        searchPengajuan,
        searchDataPengajuan,
        search,
        setSearch,
    } = DaftarPengajuanViewModel();


    return <section className = "content">
        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">Daftar Pengajuan</h5>
                        <div className = "mb-0 card-subtitle text-muted">
                        </div>
                    </div>
                    <div className = "card-body">
                        <div>
                            <div className = "row">
                                <div className = "col-12 col-md-6">
                                    <div className = "form-group">
                                        <input type = "text"
                                               className = "form-control"
                                               id = "nama"
                                               onChange = { ( e ) => {
                                                   setSearch( e.target.value );
                                                   searchDataPengajuan( e.target.value );
                                               } }
                                               placeholder = "Cari..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TableDaftarPengajaun
                            loading = { loading }
                            listPengajuan = { search !== '' ? searchPengajuan : listPengajuan }/>
                        <div className = "row">
                            <div className = "col-12 text-center">
                                <button type = "button"
                                        className = "btn btn-info-light ajax"
                                        title = "">
                                    <FaAngleDoubleDown style = { {
                                        marginRight : "5px"
                                    } }/>
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
