"use client"
import React from "react";
import {DahboardAtasanViewModel} from "@/view/after_login/atasan/dashboard/view_model/DahboardAtasanViewModel";


export const DashboardAtasanView = () => {

    const day = new Date()
    const localeDay = day.toLocaleString()

    const {dashboard, loading} = DahboardAtasanViewModel()

    return <section className="content">
        <div className="row">
            <div className="col-xl-12 col-12">
                <div className="box bg-success">
                    <div className="box-body d-flex p-0">
                        <div className="flex-grow-1 p-30 flex-grow-1 bg-img bg-none-md"
                             style={{
                                 margin: "30px",
                                 backgroundImage:
                                     "url(/img/img/logo-astra-full.png)",
                                 //     "url(https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-30.svg)",
                                 backgroundPosition: "right bottom",
                                 backgroundSize: "auto 50%",
                             }}
                        >
                            <div className="row">
                                <div className="col-12 col-xl-7">
                                    <h1 className="mb-0 fw-600">Selamat Datang</h1>
                                    <p className="my-10 fs-16 text-white-70">{`${localeDay}`}</p>
                                </div>
                                <div className="col-12 col-xl-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-12 col-12">
                {
                    loading ? <div></div> : <div className="row">
                        <div className="col-6 col-md-3">
                            <a className="box box-link-shadow text-center pull-up" href="javascript:void(0)">
                                <div className="box-body py-5 bg-primary-light px-5">
                                    <p className="fw-500 text-primary text-overflow">Pengajuan Minggu Ini</p>
                                </div>
                                <div className="box-body p-10">
                                    <h1 className="countnm fs-40 m-0">{dashboard?.pengajuanDiterima}</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-3">
                            <a className="box box-link-shadow text-center pull-up" href="javascript:void(0)">
                                <div className="box-body py-5 bg-primary-light px-5">
                                    <p className="fw-500 text-primary text-overflow">Pengajuan Diterima</p>
                                </div>
                                <div className="box-body p-10">
                                    <h1 className="countnm fs-40 m-0">{dashboard?.pengajuanDiterima}</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-3">
                            <a className="box box-link-shadow text-center pull-up" href="javascript:void(0)">
                                <div className="box-body py-5 bg-primary-light px-5">
                                    <p className="fw-500 text-primary text-overflow">Pengajuan Ditolak</p>
                                </div>
                                <div className="box-body p-10">
                                    <h1 className="countnm fs-40 m-0">{dashboard?.pengajuanDitolak}</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-3">
                            <a className="box box-link-shadow text-center pull-up" href="javascript:void(0)">
                                <div className="box-body py-5 bg-primary-light px-5">
                                    <p className="fw-500 text-primary text-overflow">Total Vendor</p>
                                </div>
                                <div className="box-body p-10">
                                    <h1 className="countnm fs-40 m-0">{dashboard?.totalVendor}</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    </section>
}
