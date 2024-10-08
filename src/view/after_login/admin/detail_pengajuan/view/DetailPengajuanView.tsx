"use client";
import {
    DetailPengajuanViewModel
} from "@/view/after_login/admin/detail_pengajuan/view_model/DetailPengajuanViewModel";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import FormatCurrency from "@/utils/utils/Currency/FormatCurrency";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";
import React from "react";
import { InputSelectOption } from "@/application/component/input/InputSelectOption";
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { ModelTerimaPengajuan } from "@/view/after_login/admin/detail_pengajuan/model/ModelTerimaPengajuan";
import StatusFormat from "@/utils/utils/status/StatusFormat";
import { InputTextArea } from "@/application/component/input/InputTextArea";
import { ModelSelesaiPengajaun } from "@/view/after_login/admin/detail_pengajuan/model/ModelSelesaiPengajaun";
import { InputFilePrimary } from "@/application/component/input/InputFilePrimary";


export const DetailPengajuanView = () => {
    const {
        detailPengajuan,
        modal,
        vendor,
        patchPengajuan,
        pengajuanSelesai,
        tolakPengajuan,
        register,
        errors,
        handleSubmit,
        loadingTolak,
        status
    } = DetailPengajuanViewModel()
    return <section className = "invoice printableArea" style = { {} }>
        <div className = "row" style = { {} }>
            <div className = "col-sm-6">
                <div className = "float-start mt-3">
                    <h5 className = "text-dark">{ detailPengajuan?.data.pengajuan_name }</h5>
                    <p className = "text-muted ">{ detailPengajuan?.data.deskripsi }</p>
                </div>

            </div>

            <div className = "col-sm-4 offset-sm-2">
                <div className = "mt-3 float-sm-end">
                    <p className = "text-fade">
                        <span className = "text-dark">Tanggal Pengajuan:</span>
                        &nbsp;&nbsp;&nbsp; { FormatDate.stringDateToStringLocale( detailPengajuan?.data.tanggal_pengajuan ?? '' ) }
                    </p>
                    <p className = "text-fade">
                        <span className = "text-dark">Tanggal Estimasi Selesai:</span>
                        &nbsp;&nbsp;&nbsp; { FormatDate.stringDateToStringLocale( detailPengajuan?.data.tanggal_selesai ?? '' ) ?? '' }
                    </p>
                    {
                        status ? <p className="text-fade">
                            <span className="text-dark">Tanggal Selesai:</span>
                            &nbsp;&nbsp;&nbsp; {FormatDate.stringDateToStringLocale(detailPengajuan?.data.tanggal_penyelesaian ?? '')}
                        </p> : <></>
                    }
                    <p className = "text-fade">
                        <span className = "text-dark">Status Pengajuan:</span>
                        <span
                            className = { `badge ${ StatusFormat.colorStatusDetail( detailPengajuan?.data.status ?? '' ) } float-end` }>{ detailPengajuan?.data.status }</span>
                    </p>
                    {/*<p className = "text-fade">*/ }
                    {/*    <span className = "text-dark">Order ID:</span>*/ }
                    {/*    <span className = "float-end">#123456</span></p>*/ }
                </div>
            </div>

            <div className = "row mt-4">
                <div className = "col-sm-3 text-fade">
                    <h6 className = "text-dark">Nama Pemohon</h6>
                    <div>
                        { detailPengajuan?.data.user.nama }<br/>
                        { detailPengajuan?.data.departemen }<br/>
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/ }
                    </div>
                </div>

                <div className = "col-sm-3 text-fade">
                    <h6 className = "text-dark">Vendor</h6>
                    <div>
                        { detailPengajuan?.data.vendor?.nama_vendor ?? '-' }<br/>
                        { FormatCurrency.numberToReal( detailPengajuan?.data.harga ?? 0 ) }<br/>
                        {/*Miami, FL 94107<br/>*/ }
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/ }
                    </div>
                </div>

                <div className = "col-sm-3 text-fade">
                    <h6 className = "text-dark">Komentar Atasan</h6>
                    <div>
                        { detailPengajuan?.data.komentar ?? '-' }<br/>
                        {/*{ FormatCurrency.numberToReal( detailPengajuan?.data.harga ?? 0 ) }<br/>*/ }
                        {/*Miami, FL 94107<br/>*/ }
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/ }
                    </div>
                </div>
                { detailPengajuan?.data.komentar_ditolak !== null ? <div className = "col-sm-3 text-fade">
                    <h6 className = "text-dark">Alasan Tolak</h6>
                    <div>
                        { detailPengajuan?.data.komentar_ditolak ?? '-' }<br/>
                        {/*{ FormatCurrency.numberToReal( detailPengajuan?.data.harga ?? 0 ) }<br/>*/ }
                        {/*Miami, FL 94107<br/>*/ }
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/ }
                    </div>
                </div> : null }

            </div>

            <div className = "row">
                <div className = "col-12">
                    <div className = "table-responsive">
                        <table className = "text-fade table-bordered table mt-4">
                            <thead>
                            <tr>
                                <th className = "text-dark">#</th>
                                <th className = "text-dark">Item</th>
                                <th className = "text-dark">Vendor</th>
                                <th className = "text-dark">Harga</th>
                                {
                                    detailPengajuan?.data.komentar_selesai !== null ?
                                        <th className = "text-dark">Keterangan</th> :
                                        null
                                }
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <span className = "text-dark">{ detailPengajuan?.data.pengajuan_name }</span> <br/>
                                    {/*Brand Model VGN-TXN27N/B*/ }
                                    {/*11.1" Notebook PC*/ }
                                </td>
                                <td>{ detailPengajuan?.data.vendor?.nama_vendor ?? '-' }</td>
                                <td>{ FormatCurrency.numberToReal( detailPengajuan?.data.harga ?? 0 ) }</td>
                                {
                                    detailPengajuan?.data.komentar_selesai !== null ?
                                        <td>{ detailPengajuan?.data.komentar_selesai }</td> : null
                                }
                            </tr>

                            </tbody>
                        </table>
                    </div>


                    {
                        detailPengajuan?.data.vendor !== null ? <div className = "table-responsive">
                            <table className = "text-fade table-bordered table mt-4">
                                <thead>
                                <tr>
                                    <th className = "text-dark">#</th>
                                    <th className = "text-dark">No Vendor</th>
                                    <th className = "text-dark">Nama Vendor</th>
                                    <th className = "text-dark">Pemilik Vendor</th>
                                    <th className = "text-dark">Telepon</th>
                                    <th className = "text-dark">Alamat</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{ detailPengajuan?.data.vendor?.no_vendor }</td>
                                    <td>{ detailPengajuan?.data.vendor?.nama_vendor }</td>
                                    <td>{ detailPengajuan?.data.vendor?.pemilik_vendor }</td>
                                    <td>{ detailPengajuan?.data.vendor?.telpon }</td>
                                    <td>{ detailPengajuan?.data.vendor?.alamat }</td>
                                </tr>

                                </tbody>
                            </table>
                        </div> : null
                    }


                    <div style = { {
                        marginTop : '20px',
                        marginBottom : '20px',
                        display : 'flex',
                        flexDirection : 'row',
                        justifyContent : 'center',

                    } }>

                        {
                            detailPengajuan?.data.foto.map( ( item, index ) => {
                                return <div key = { index }
                                            className = { `flex-column col-12 col-md-6 p-5` }
                                            style = { {
                                                boxShadow : '0 0 10px 0 rgba(0,0,0,0.3)',
                                                borderRadius : '10px',
                                                maxHeight : '200px',
                                                flex : 1,
                                                justifyContent : 'center',
                                                display : 'flex',
                                                margin : '10px',
                                                maxWidth : '300px',
                                            } }>
                                    <img className = { `col-12` }
                                         style = { {
                                             borderRadius : '10px',
                                             maxHeight : '200px',
                                         } }
                                         src = { item.file_photo }
                                         alt = { 'img' }/>

                                    <div className={``} style={{
                                        // zIndex : 1,
                                        backgroundColor : 'white',
                                        // width : '100%',
                                        textAlign : 'center',
                                    }}>
                                        <h5 className = { `text-center` } style={{
                                        }}>{ item.is_in === 'in' ? 'Sebelum' : 'Sesudah' }</h5>
                                    </div>
                                </div>
                            } )
                        }

                    </div>
                </div>

            </div>

            <div className = "row">
                <div className = "col-sm-6 text-fade">
                </div>
                <div className = "col-sm-6">
                    <div className = "float-end text-fade mt-3 mt-sm-0">
                    </div>
                    <div className = "clearfix"></div>
                </div>
            </div>

            <div className = "d-print-none mt-4">
                <div className = { `d-flex justify-content-between` }>
                    <div>
                        { detailPengajuan?.data.status === 'Verifikasi Admin' ?
                            <ButtonPrimary type = { 'btn-danger' }
                                           label = { 'Tolak Pengajuan' }
                                           onClick = { () => {
                                               modal.show();
                                               modal.body( modalTolak() )
                                           } }/> : <div></div>
                        }
                    </div>
                    <div className = { `d-flex justify-content-end` }>
                        <div className = { `me-10` }>
                            <a href = "javascript:window.print()" className = { `btn btn-info` }>Print</a>
                        </div>

                        {
                            detailPengajuan?.data.status === 'Verifikasi Admin' ?
                                <div className = { `me-10` }>
                                    <ButtonPrimary label = { 'Terima Pengajuan' } onClick = { () => {
                                        modal.show();
                                        modal.body( modalDataBody() )
                                    } }/>
                                </div> : null
                        }
                        {
                            detailPengajuan?.data.status === 'Proses Admin' ?
                                <div className = { `me-10` }>
                                    <ButtonPrimary label = { 'Pengajuan Selesai' } onClick = { () => {
                                        modal.show();
                                        modal.body( modalPengajuanSelesai() )
                                    } }/>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>

    function modalDataBody() {
        let dataToSend : ModelTerimaPengajuan = {
            tipe : "Proses Admin",
            vendorId : 0,
            tanggalSelesai : '',
            tanggalMulai : '',
            // harga : 0,
        }
        return <div className = "modal-dialog modal-dialog-centered">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title" id = "myCenterModalLabel">Terima Pengajuan</h4>
                    <button type = "button"
                            className = "btn-close"
                            onClick = { () => {
                                modal.hide();
                            } }></button>
                </div>
                <div className = "modal-body">
                    <div style = { {
                        display : 'flex',
                        flexDirection : 'row',
                    } }>
                        <div style = { {
                            width : '100%',
                        } }>
                            <TextInputPrimary label = { 'Tanggal Mulai' }
                                              type = { 'date' }
                                              onChange = { ( event ) => {
                                                  dataToSend = {
                                                      ...dataToSend,
                                                      tanggalMulai : FormatDate.dateStringToSend( event.target.value ),
                                                  } as ModelTerimaPengajuan
                                              } }/>
                        </div>
                        <div style = { {
                            margin : '0 10px',
                        } }></div>
                        <div style = { {
                            width : '100%',
                        } }>
                            <TextInputPrimary label = { 'Tanggal Selesai' }
                                              type = { 'date' }
                                              onChange = { ( event ) => {
                                                  dataToSend = {
                                                      ...dataToSend,
                                                      tanggalSelesai : FormatDate.dateStringToSend( event.target.value ),
                                                  } as ModelTerimaPengajuan
                                              } }/>
                        </div>

                    </div>
                    <InputSelectOption label = { 'Pilih Vendor' }
                                       selected = { ( data ) => {
                                           dataToSend = {
                                               ...dataToSend,
                                               vendorId : parseInt( data?.value ?? '0' ),
                                           } as ModelTerimaPengajuan
                                       } }
                                       value = { vendor.map( ( item ) => {
                                           return {
                                               value : item.id.toString(),
                                               key : item.id.toString(),
                                               title : item.namaVendor,
                                           }
                                       } ) }/>

                </div>
                <div className = { `modal-footer` }>
                    <div className = { `d-flex justify-content-between` }>
                        <div className = { `` }>
                            <ButtonPrimary
                                label = { 'Kembali' }
                                onClick = { () => {
                                    modal.hide();
                                } }
                                type = { "btn-danger" }/>
                        </div>
                        <div className = { `` }>
                            <ButtonPrimary
                                onClick = { () => {

                                    patchPengajuan( detailPengajuan?.data.id ?? 0, dataToSend ).then( () => {
                                    } );

                                } }
                                label = { 'Terima Pengajuan' }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    function modalTolak() {
        return <div className = "modal-dialog modal-dialog-centered">
                <div className = "modal-content">
                    <div className = "modal-header">
                        <h4 className = "modal-title" id = "myCenterModalLabel">Tolak Pengajaun</h4>
                        <button type = "button"
                                className = "btn-close"
                                onClick = { () => {
                                    modal.hide();
                                } }></button>
                    </div>
                    <form onSubmit = { handleSubmit( tolakPengajuan ) }>
                        <div className = "modal-body">
                            <h6>Yakin Tolak Pengajuan ?</h6>
                        </div>
                        <div style={{
                            padding : '0 20px',
                            marginBottom : '20px',
                        }}>
                            <InputTextArea label = { 'Alasan' }
                                           id = { 'deskripsi' }
                                           data = { register( 'reason' ) }
                                           isError = { errors.reason !== undefined }
                                           messageError = { errors.reason?.message }/>
                        </div>

                        <div className = { `modal-footer` }>
                        <div className = { `col-12 d-flex justify-content-between` }>
                                <ButtonPrimary
                                    label = { 'Kembali' }
                                    onClick = { () => {
                                        modal.hide();
                                    } }
                                    type = { "btn-primary" }/>
                            {/*<div className = { `` }>*/}
                            {/*</div>*/}
                                <ButtonPrimary
                                    type = { "btn-danger" }
                                    data = { 'submit' }
                                    label = { loadingTolak ? 'Tunggu Sebentar' : 'Simpan' }/>
                            {/*<div className = { `` }>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    </form>
        </div>
        </div>
    }

    function modalPengajuanSelesai() {
        let dataSend : ModelSelesaiPengajaun = {
            harga : 0,
            bph : '',
            keterangan : '',
            foto : [],
        };
        return <div className = "modal-dialog modal-dialog-centered">
            <div className = "modal-content">
                <div className = "modal-header">
                    <h4 className = "modal-title" id = "myCenterModalLabel">Pengajuan Selesai</h4>
                    <button type = "button"
                            className = "btn-close"
                            onClick = { () => {
                                modal.hide();
                            } }></button>
                </div>
                <div className = "modal-body">
                    <TextInputPrimary label = { 'No. BPH' }
                                      type = { 'text' }
                                      onChange = { ( event ) => {
                                          dataSend = {
                                              ...dataSend,
                                              bph : event.target.value,
                                          }
                                      } }/>
                    <TextInputPrimary label = { 'Biaya Perbaikan' }
                                      type = { 'text' }
                                      onChange = { ( event ) => {
                                          dataSend = {
                                              ...dataSend,
                                              harga : parseInt( event.target.value ),
                                          }
                                      } }/>
                    <InputFilePrimary label = { 'Masukan Foto' }
                                      id = { 'foto' }
                                      // data = { register( 'foto' ) }
                                      // messageError = { errors.foto?.message }
                                      // isError = { errors.foto !== undefined }
                                      isMultiple = { true }
                                      onInput = { ( event ) => {
                                          const files = event.currentTarget.files;
                                          if ( files ) {
                                              for ( let i = 0; i < files.length; i++ ) {
                                                  const file = files[ i ];
                                                  const reader = new FileReader();
                                                  reader.onload = ( eventData ) => {
                                                        dataSend = {
                                                            ...dataSend,
                                                            foto : [ ...dataSend.foto, {
                                                                image : eventData.target?.result as string,
                                                            }] as string[],
                                                        }
                                                      // setValue( 'foto', [ ...getValues( "foto" ), {
                                                      //     image : eventData.target?.result as string,
                                                      // } ] );
                                                  };
                                                  reader.readAsDataURL( file );
                                              }
                                          }
                                      } }/>
                    <InputTextArea label = { 'Keterangan' }
                                   onChange = { ( event ) => {
                                       dataSend = {
                                           ...dataSend,
                                           keterangan : event.target.value,
                                       }
                                   } }/>
                </div>
                <div className = { `modal-footer` }>
                    <div className = { `d-flex justify-content-between` }>
                        <div className = { `` }>
                            <ButtonPrimary
                                type = { "btn-danger" }
                                onClick = { () => {
                                    modal.hide();
                                } }
                                label = { 'Kembali' }/>
                        </div>
                        <div className = { `` }>
                            <ButtonPrimary
                                label = { 'Ya' }
                                onClick = { () => {
                                    // console.log(dataSend)

                                    pengajuanSelesai( dataSend ).then( () => {
                                        // window.location.reload()
                                    } )
                                } }
                                type = { "btn-primary" }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
