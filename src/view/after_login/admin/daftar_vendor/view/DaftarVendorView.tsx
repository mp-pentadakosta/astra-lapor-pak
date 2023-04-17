"use client";
import { FaPlus } from "react-icons/fa";
import { DaftarVendorViewModel } from "@/view/after_login/admin/daftar_vendor/view_model/DaftarVendorViewModel";
import { TableVendor } from "@/view/after_login/admin/daftar_vendor/component/TableVendor";
import React from "react";
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";
import { ModelAddVendor } from "@/view/after_login/admin/daftar_vendor/component/ModelAddVendor";
import { InputTextArea } from "@/application/component/input/InputTextArea";


export const DaftarVendorView = () => {
    const {
        vendor,
        modal,
        addVendor,
        addDataVendor,
        getSearchVendor,
        editDataVendor,
        deletedVendor,
        searchVendor,
        setSearch,
        search,
    } = DaftarVendorViewModel()
    return <section className = "content">
        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">Daftar Vendor</h5>
                        <div className = "mb-0 card-subtitle text-muted">
                            <button type = "button" className = "btn btn-primary" onClick = { () => {
                                modal.show();
                                modal.body( modalDataBody( addVendor, 'add' ) );
                            } }>
                                <FaPlus style = { {
                                    marginRight : '0.5rem'
                                } }/>
                                Tambah Vendor
                            </button>
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
                                               onChange = { ( event ) => {
                                                   setSearch( event.target.value );
                                                   getSearchVendor( event.target.value )
                                               } }
                                               placeholder = "Cari..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TableVendor
                            loading = { false }
                            listPengajuan = { search.length > 0 ? searchVendor : vendor }
                            editVendor = { ( data ) => {
                                modal.show();
                                modal.body( modalDataBody( {
                                    nama_vendor : data.namaVendor,
                                    alamat : data.alamat,
                                    telpon : data.telpon,
                                    pemilik_vendor : data.pemilikVendor,
                                }, 'edit', data.id ) );
                            } }
                            deleteVendor = { ( data ) => {
                                modal.show();
                                modal.body( modalDelete( data.id ) );
                            } }/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    function modalDataBody( data : ModelAddVendor | undefined, status : string, id? : number ) {
        let dataToSend = data;
        return <div className = "modal-dialog modal-dialog-centered">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title" id = "myCenterModalLabel">Tambah Vendor</h4>
                    <button type = "button"
                            className = "btn-close"
                            onClick = { () => {
                                modal.hide();
                            } }></button>
                </div>
                <div className = "modal-body">
                    <TextInputPrimary label = { 'Nama Vendor' }
                                      type = { 'text' }
                                      defaultValue = { data?.nama_vendor }
                                      onChange = { ( event ) => {
                                          dataToSend = {
                                              ...dataToSend,
                                              nama_vendor : event.target.value
                                          } as ModelAddVendor;
                                      } }/>
                    <TextInputPrimary label = { 'Pemilik Vendor' }
                                      defaultValue = { data?.pemilik_vendor }
                                      type = { 'text' }
                                      onChange = { ( event ) => {
                                          dataToSend = {
                                              ...dataToSend,
                                              pemilik_vendor : event.target.value
                                          } as ModelAddVendor;
                                      } }/>
                    <TextInputPrimary label = { 'Telepon' }
                                      defaultValue = { data?.telpon }
                                      type = { 'text' }
                                      onChange = { ( event ) => {
                                          dataToSend = {
                                              ...dataToSend,
                                              telpon : event.target.value
                                          } as ModelAddVendor;
                                      } }/>
                    <InputTextArea label = { 'Alamat' }
                                   defaultValue = { data?.alamat }
                                   onChange = { ( event ) => {
                                       dataToSend = {
                                           ...dataToSend,
                                           alamat : event.target.value
                                       } as ModelAddVendor;
                                   } }/>
                </div>
                <div className = { `modal-footer` }>
                    <div style = { {
                        display : 'flex',
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                    } }>
                        <ButtonPrimary
                            label = { 'Kembali' }
                            type = { "btn-danger" }/>
                        <ButtonPrimary
                            onClick = { () => {
                                if ( status === 'add' ) {
                                    addDataVendor( dataToSend ?? {
                                        nama_vendor : '',
                                        pemilik_vendor : '',
                                        telpon : '',
                                        alamat : ''
                                    } );
                                }
                                if ( status === 'edit' ) {
                                    editDataVendor( id ?? 0, dataToSend ?? {
                                        nama_vendor : '',
                                        pemilik_vendor : '',
                                        telpon : '',
                                        alamat : ''
                                    }, );
                                }
                            } }
                            label = { 'Simpan' }/>
                    </div>
                </div>
            </div>
        </div>
    }

    function modalDelete( id : number ) {
        return <div className = "modal-dialog modal-dialog-centered">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title" id = "myCenterModalLabel">Hapus Vendor</h4>
                    <button type = "button"
                            className = "btn-close"
                            onClick = { () => {
                                modal.hide();
                            } }></button>
                </div>
                <div className = "modal-body">
                    <h6>Yakin ingin menghapus data vendor ?</h6>
                </div>
                <div className = { `modal-footer` }>
                    <div style = { {
                        display : 'flex',
                        flexDirection : 'row',
                        justifyContent : 'space-between',
                    } }>
                        <ButtonPrimary
                            label = { 'Kembali' }
                            type = { "btn-primary" }/>
                        <ButtonPrimary
                            type = { 'btn-danger' }
                            onClick = { () => {
                                deletedVendor( id )
                            } }
                            label = { 'Hapus' }/>
                    </div>
                </div>
            </div>
        </div>
    }
}
