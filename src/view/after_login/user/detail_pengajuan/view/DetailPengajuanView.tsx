"use client";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import FormatCurrency from "@/utils/utils/Currency/FormatCurrency";
import {
    DetailPengajuanUserViewModel
} from "@/view/after_login/user/detail_pengajuan/view_model/DetailPengajuanViewModel";

import { BsFillStarFill } from "react-icons/bs";
import React from "react";


export const DetailPengajuanUserView = () => {
    const {
        detailPengajuan,
        rating,
        setRating,
        giveRating,
    } = DetailPengajuanUserViewModel()

    return <section className="invoice printableArea" style={{}}>
        <div className="row">
            <div className="col-sm-6">
                <div className="float-start mt-3">
                    <h5 className="text-dark">{detailPengajuan?.data.pengajuan_name}</h5>
                    <p className="text-muted ">{detailPengajuan?.data.deskripsi}</p>
                </div>

            </div>

            <div className="col-sm-4 offset-sm-2">
                <div className="mt-3 float-sm-end">
                    <p className="text-fade">
                        <span className="text-dark">Tanggal Pengajuan:</span>
                        &nbsp;&nbsp;&nbsp; {FormatDate.stringDateToStringLocale(detailPengajuan?.data.tanggal_pengajuan ?? '')}
                    </p>
                    <p className="text-fade">
                        <span className="text-dark">Status Pengajuan:</span>
                        <span className="badge bg-success float-end">{detailPengajuan?.data.status}</span></p>
                    {/*<p className = "text-fade">*/}
                    {/*    <span className = "text-dark">Order ID:</span>*/}
                    {/*    <span className = "float-end">#123456</span></p>*/}
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-4 text-fade">
                    <h6 className="text-dark">Nama Pemohon</h6>
                    <div>
                        {detailPengajuan?.data.pengajuan_name}<br/>
                        {detailPengajuan?.data.departemen}<br/>
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/}
                    </div>
                </div>

                <div className="col-sm-4 text-fade">
                    <h6 className="text-dark">Vendor</h6>
                    <div>
                        {detailPengajuan?.data.vendor?.nama_vendor ?? '-'}<br/>
                        {FormatCurrency.numberToReal(detailPengajuan?.data.harga ?? 0)}<br/>
                        {/*Miami, FL 94107<br/>*/}
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/}
                    </div>
                </div>

                <div className="col-sm-4 text-fade">
                    <h6 className="text-dark">Komentar Atasan</h6>
                    <div>
                        {detailPengajuan?.data.komentar ?? '-'}<br/>
                        {/*{ FormatCurrency.numberToReal( detailPengajuan?.data.harga ?? 0 ) }<br/>*/}
                        {/*Miami, FL 94107<br/>*/}
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/}
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="text-fade table-bordered table mt-4">
                            <thead>
                            <tr>
                                <th className="text-dark">#</th>
                                <th className="text-dark">Item</th>
                                <th className="text-dark">Vendor</th>
                                <th className="text-dark">Harga</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <span className="text-dark">{detailPengajuan?.data.pengajuan_name}</span> <br/>
                                    {/*Brand Model VGN-TXN27N/B*/}
                                    {/*11.1" Notebook PC*/}
                                </td>
                                <td>{detailPengajuan?.data.vendor?.nama_vendor ?? '-'}</td>
                                <td>{FormatCurrency.numberToReal(detailPengajuan?.data.harga ?? 0)}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div style={{
                        marginTop: '20px',
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',

                    }}>
                        {
                            detailPengajuan?.data.foto.map((item, index) => {
                                return <div key={index}
                                            className={`col-12 col-md-6`}
                                            style={{
                                                boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                                                borderRadius: '10px',
                                                maxHeight: '200px',
                                                flex: 1,
                                                justifyContent: 'center',
                                                display: 'flex',
                                                margin: '10px',
                                                maxWidth: '300px',
                                            }}>
                                    <img className={`col-12`}
                                         style={{
                                             borderRadius: '10px',
                                             maxHeight: '200px',
                                         }}
                                         src={item.file_photo}
                                         alt={'img'}/>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={`col-12`}>
                    <h6>Berikan Rating</h6>
                    <div className={`float-center`}>
                        {
                            [1, 2, 3, 4, 5].map((item, index) => {
                                return rating >= item ? <BsFillStarFill size={50} className={`m-2`} key={index} color={'gold'} onClick={()=>{
                                    setRating(item -1)
                                    }}/> :
                                    <BsFillStarFill size={50} key={index} className={`m-2`} color={'grey'} onClick={()=>{
                                        setRating(item)
                                    }} />

                            })
                        }
                    </div>
                    <div className="mb-0 card-subtitle text-muted mt-20">
                        <button type="button" className="btn btn-success-light" onClick={() => {
                             giveRating().then(() => {})
                        }}>
                            Simpan
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 text-fade">
                </div>
                <div className="col-sm-6">
                    <div className="float-end text-fade mt-3 mt-sm-0">
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <div className="d-print-none mt-4">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <div></div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}>
                    </div>
                </div>
            </div>
        </div>
    </section>

}
