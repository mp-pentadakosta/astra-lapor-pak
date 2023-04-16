import React from "react";


export const DashboardView = () => {

    const day = new Date()
    const localeDay = day.toLocaleString()
    // const localeTime = day.toISOString().slice( 0, 10 )

    return <section className = "content">
        <div className = "row">
            <div className = "col-xl-12 col-12">
                <div className = "box bg-success">
                    <div className = "box-body d-flex p-0">
                        <div className = "flex-grow-1 p-30 flex-grow-1 bg-img bg-none-md"
                             style = { {
                                 margin : "30px",
                                 backgroundImage :
                                     "url(/img/img/logo-astra-full.png)",
                                 //     "url(https://edulearn-lms-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-30.svg)",
                                 backgroundPosition : "right bottom",
                                 backgroundSize : "auto 50%",
                             } }
                        >
                            <div className = "row">
                                <div className = "col-12 col-xl-7">
                                    <h1 className = "mb-0 fw-600">Selamat Datang</h1>
                                    <p className = "my-10 fs-16 text-white-70">{ `${ localeDay }` }</p>
                                    {/*<p className = "my-10 fs-16 text-white-70">{ `${ localeTime }` }</p>*/ }
                                    {/*<div className = "mt-45 d-md-flex align-items-center">*/ }
                                    {/*    <div className = "me-30 mb-30 mb-md-0">*/ }
                                    {/*        <div className = "d-flex align-items-center">*/ }
                                    {/*            <div className = "me-15 text-center fs-24 w-50 h-50 l-h-50 bg-danger b-1 border-w rounded-circle">*/ }
                                    {/*                <i className = "fa fa-graduation-cap"></i>*/ }
                                    {/*            </div>*/ }
                                    {/*            <div>*/ }
                                    {/*                <h5 className = "mb-0">Students</h5>*/ }
                                    {/*                <p className = "mb-0 text-white-70">75,000+</p>*/ }
                                    {/*            </div>*/ }
                                    {/*        </div>*/ }
                                    {/*    </div>*/ }
                                    {/*    <div>*/ }
                                    {/*        <div className = "d-flex align-items-center">*/ }
                                    {/*            <div className = "me-15 text-center fs-24 w-50 h-50 l-h-50 bg-warning b-1 border-white rounded-circle">*/ }
                                    {/*                <i className = "fa fa-user"></i>*/ }
                                    {/*            </div>*/ }
                                    {/*            <div>*/ }
                                    {/*                <h5 className = "mb-0">Expert Mentors</h5>*/ }
                                    {/*                <p className = "mb-0 text-white-70">200+</p>*/ }
                                    {/*            </div>*/ }
                                    {/*        </div>*/ }
                                    {/*    </div>*/ }
                                    {/*</div>*/ }
                                </div>
                                <div className = "col-12 col-xl-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "col-xl-12 col-12">
                <div className = "row">
                    <div className = "col-6 col-md-3">
                        <a className = "box box-link-shadow text-center pull-up" href = "javascript:void(0)">
                            <div className = "box-body py-5 bg-primary-light px-5">
                                <p className = "fw-500 text-primary text-overflow">Pengajuan Minggu Ini</p>
                            </div>
                            <div className = "box-body p-10">
                                <h1 className = "countnm fs-40 m-0">5</h1>
                            </div>
                        </a>
                    </div>
                    <div className = "col-6 col-md-3">
                        <a className = "box box-link-shadow text-center pull-up" href = "javascript:void(0)">
                            <div className = "box-body py-5 bg-primary-light px-5">
                                <p className = "fw-500 text-primary text-overflow">Pengajuan Diterima</p>
                            </div>
                            <div className = "box-body p-10">
                                <h1 className = "countnm fs-40 m-0">25</h1>
                            </div>
                        </a>
                    </div>
                    <div className = "col-6 col-md-3">
                        <a className = "box box-link-shadow text-center pull-up" href = "javascript:void(0)">
                            <div className = "box-body py-5 bg-primary-light px-5">
                                <p className = "fw-500 text-primary text-overflow">Pengajuan Ditolak</p>
                            </div>
                            <div className = "box-body p-10">
                                <h1 className = "countnm fs-40 m-0">25</h1>
                            </div>
                        </a>
                    </div>
                    <div className = "col-6 col-md-3">
                        <a className = "box box-link-shadow text-center pull-up" href = "javascript:void(0)">
                            <div className = "box-body py-5 bg-primary-light px-5">
                                <p className = "fw-500 text-primary text-overflow">Total Vendor</p>
                            </div>
                            <div className = "box-body p-10">
                                <h1 className = "countnm fs-40 m-0">25</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
