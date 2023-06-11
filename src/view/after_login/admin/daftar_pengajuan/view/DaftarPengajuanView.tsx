"use client";
import {
    DaftarPengajuanViewModel
} from "@/view/after_login/admin/daftar_pengajuan/view_model/DaftarPengajuanViewModel";
import {FaAngleDoubleDown} from "react-icons/fa";
import React from "react";
import {TableDaftarPengajaun} from "@/utils/component/table/TableDaftarPengajaun";
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";


export const DaftarPengajuanView = () => {
    const {
        listPengajuan,
        loading,
        searchPengajuan,
        searchDataPengajuan,
        search,
        setSearch,
        setPage,
        page,
        getListPengajuan,
        setDate,
        getListPengajuanFilter,
        downloadExcel,
        loadingExcel,
        date
    } = DaftarPengajuanViewModel();


    return <section className="content">
        <div className="row">
            <div className="col-12 col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Daftar Pengajuan</h5>
                        <div className="mb-0 card-subtitle text-muted">
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className = "row">
                                <div className = "col-12">
                                    <div className = "form-group">
                                        <div className = { `row` }>
                                            <div className = { `col-6 col-md-6` }>
                                                <TextInputPrimary label = { 'Start Date' }
                                                                  type = { 'date' }
                                                                  onChange = { ( event ) => {
                                                                      setDate( ( prevState ) => {
                                                                          return {
                                                                              ...prevState,
                                                                              startDate : event.target.value ?? ''
                                                                          }
                                                                      } )
                                                                  } }/>
                                            </div>
                                            <div className = { `col-6 col-md-6` }>
                                                <TextInputPrimary label = { 'End Date' }
                                                                  type = { 'date' }
                                                                  onChange = { ( event ) => {
                                                                      setDate( ( prevState ) => {
                                                                          return {
                                                                              ...prevState,
                                                                              endDate : event.target.value ?? ''
                                                                          }
                                                                      } )
                                                                  } }/>
                                            </div>
                                            <div className = { `col-12` }>
                                                <div className = { `row` }>
                                                    <div className = { `col-12 col-md-6` }>
                                                        <ButtonPrimary label = { loadingExcel ? "Mohon Tunggu" : 'Download Excel' }
                                                                       full
                                                                       data = { 'button' }
                                                                       type = { 'btn-info' }
                                                                       onClick = { () => {
                                                                           if ( loadingExcel ) return;
                                                                           downloadExcel( date.startDate, date.endDate )
                                                                       } }/>
                                                    </div>
                                                    <div className = { `col-12 col-md-6` }>
                                                        <ButtonPrimary label = { 'Cari' }
                                                                       full
                                                                       data = { 'button' }
                                                                       onClick = { () => {
                                                                           getListPengajuanFilter( page, 10 );
                                                                           // getHistory( date.startDate, date.endDate )
                                                                       } }/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            role={'admin'}
                            loading={loading}
                            listPengajuan={search !== '' ? searchPengajuan : listPengajuan}/>
                        <div className="row">
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
