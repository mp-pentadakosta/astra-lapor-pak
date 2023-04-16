"use client";
import { TableDaftarPengajaun } from "@/view/after_login/admin/daftar_pengajuan/component/TableDaftarPengajaun";
import {
    DaftarPengajuanViewModel
} from "@/view/after_login/admin/daftar_pengajuan/view_model/DaftarPengajuanViewModel";
import { FaAngleDoubleDown } from "react-icons/fa";
import React, { useContext } from "react";
import { ModalContext } from "@/application/component/modal/ModalContext";
import { FaPlus } from "react-icons/fa";
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { InputSelectOption } from "@/application/component/input/InputSelectOption";
import { InputTextArea } from "@/application/component/input/InputTextArea";
import { InputFilePrimary } from "@/application/component/input/InputFilePrimary";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";
import { ModelAddPengajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelAddPengajuan";


export const DaftarPengajuanView = () => {
    const modal = useContext( ModalContext );
    const {
        listPengajuan,
        loading,
        searchPengajuan,
        searchDataPengajuan,
        search,
        setSearch,
        doAddPengajuan,
        addPengajuan,
        setAddPengajaun,
        listPrioritas,
    } = DaftarPengajuanViewModel();


    return <section className = "content">
        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">Daftar Pengajuan</h5>
                        <div className = "mb-0 card-subtitle text-muted">
                            <button type = "button" className = "btn btn-primary" onClick = { () => {
                                modal.show();
                                modal.body( modalDataBody() );
                            } }>
                                <FaPlus style = { {
                                    marginRight : '0.5rem'
                                } }/>
                                Tambah Pengajaun
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
                                    {/*<i className = "fa fa-spin fa-refresh"></i>&nbsp; */ }
                                    Cari Lagi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    function modalDataBody() {
        return <div className = "modal-dialog modal-dialog-centered">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title" id = "myCenterModalLabel">Tambah Pengajaun</h4>
                    <button type = "button"
                            className = "btn-close"
                            onClick = { () => {
                                modal.hide();
                            } }></button>
                </div>
                <div className = "modal-body">
                    <TextInputPrimary label = { 'Nama Pengajuan' } type = { 'text' } onChange = { ( event ) => {
                        setAddPengajaun( ( prevState ) => {
                            return {
                                ...prevState,
                                namaPengajuan : event.target.value
                            } as ModelAddPengajuan
                        } )
                    } }/>
                    <InputSelectOption label = { 'Prioritas' }
                                       value = { listPrioritas }
                                       selected = { ( value ) => {
                                           setAddPengajaun( ( prevState ) => {
                                               return {
                                                   ...prevState,
                                                   prioritas : value?.value
                                               } as ModelAddPengajuan
                                           } )
                                       } }/>
                    <InputTextArea label = { 'Deskripsi' }
                                   onChange = { ( event ) => {
                                       setAddPengajaun( ( prevState ) => {
                                           return {
                                               ...prevState,
                                               deskripsi : event.target.value
                                           } as ModelAddPengajuan
                                       } )
                                   } }/>
                    <InputFilePrimary label = { 'Masukan Foto' }
                                      isMultiple = { true }
                                      onInput = { ( event ) => {
                                          const files = event.currentTarget.files;
                                          if ( files ) {
                                              for ( let i = 0; i < files.length; i++ ) {
                                                  const file = files[ i ];
                                                  const reader = new FileReader();
                                                  reader.onload = ( event ) => {
                                                      // console.log( event.target?.result );
                                                      // setBase64( [ ...base64, event.target?.result as string ] );
                                                      setAddPengajaun( ( prevState ) => {
                                                          return {
                                                              ...prevState,
                                                              foto : [ ...prevState?.foto ?? [], event.target?.result as string ]
                                                          } as ModelAddPengajuan
                                                      } )
                                                  };
                                                  reader.readAsDataURL( file );
                                              }
                                          }

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
                                console.log( addPengajuan );
                                modal.hide();
                            } }
                            label = { 'Simpan' }/>
                    </div>
                </div>
            </div>
        </div>
    }
}
