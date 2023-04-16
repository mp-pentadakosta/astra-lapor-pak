"use client";
import {
    DetailPengajuanViewModel
} from "@/view/after_login/admin/detail_pengajuan/view_model/DetailPengajuanViewModel";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import FormatCurrency from "@/utils/utils/Currency/FormatCurrency";


export const DetailPengajuanView = () => {
    const { detailPengajuan } = DetailPengajuanViewModel()
    return <section className = "invoice printableArea">
        <div className = "row">
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
                        <span className = "text-dark">Status Pengajuan:</span>
                        <span className = "badge bg-success float-end">{ detailPengajuan?.data.status }</span></p>
                    {/*<p className = "text-fade">*/ }
                    {/*    <span className = "text-dark">Order ID:</span>*/ }
                    {/*    <span className = "float-end">#123456</span></p>*/ }
                </div>
            </div>

            <div className = "row mt-4">
                <div className = "col-sm-4 text-fade">
                    <h6 className = "text-dark">Nama Pemohon</h6>
                    <div>
                        { detailPengajuan?.data.pengajuan_name }<br/>
                        { detailPengajuan?.data.departemen }<br/>
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/ }
                    </div>
                </div>

                <div className = "col-sm-4 text-fade">
                    <h6 className = "text-dark">Vendor</h6>
                    <div>
                        { detailPengajuan?.data.vendor ?? 'Nama Vendor' }<br/>
                        { FormatCurrency.numberToReal( detailPengajuan?.data.harga ?? 0 ) }<br/>
                        {/*Miami, FL 94107<br/>*/ }
                        {/*<abbr title = "Phone">P:</abbr> (123) 456-7890*/ }
                    </div>
                </div>

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
                                <td>{ detailPengajuan?.data.vendor }</td>
                                <td>{ FormatCurrency.numberToReal( detailPengajuan?.data.harga ?? 0 ) }</td>
                            </tr>

                            </tbody>
                        </table>
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
                <div className = "text-end">
                    <a href = "javascript:window.print()"
                       className = "btn btn-primary-light me-10"><i className = "mdi mdi-printer"></i> Print</a>
                    <a href = "javascript: void(0);" className = "btn btn-primary">Submit</a>
                </div>
            </div>
        </div>
    </section>
}
