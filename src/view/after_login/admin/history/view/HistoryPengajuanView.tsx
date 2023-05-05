"use client";
import { TableHistoryPengajuan } from "@/utils/component/table/TableHistoryPengajuan";
import { FaAngleDoubleDown } from "react-icons/fa";
import { HistoryAdminViewModel } from "@/view/after_login/admin/history/view_model/HistoryAdminViewModel";
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";
import { ModelGetHistory } from "@/view/after_login/user/history/model/ModelGetHistory";
import xlsx from "json-as-xlsx"
import { DatumResponseHistoryEntity } from "@/repository/admin/history/entity/ResponseHistoryEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";


export const HistoryPengajuanView = () => {

    const {
        getHistory,
        history,
        loading,
        getSearchHistory,
        searchHistory,
        searchData,
        setSearchData,
    } = HistoryAdminViewModel()

    let getDataHistory : ModelGetHistory = {
        tglMulai : '',
        tglSelesai : '',
    }

    const downloadFile = () => {
        // const historyDataKey = Object.keys(history.data[0])
        let headerOfHistory : string[] = []
        for ( const settingsKey in history ) {
            if ( history.hasOwnProperty( settingsKey ) ) {
                const element = history[ settingsKey ];
                headerOfHistory.push( settingsKey )
            }
        }

        let data = [
            {
                sheet : "Adults",
                columns : [
                    {
                        label : "No",
                        value : "no",
                    },
                    {
                        label : "Jenis Keluhan",
                        value : "pengajuan_name"
                    },
                    {
                        label : "Nama Pemohon",
                        value : "nama_pemohon"
                    },
                    {
                        label : "Departemen",
                        value : "departemen"
                    },
                    {
                        label : "Tanggal Pengajuan",
                        value : "tgl_pengajuan"
                    },
                    {
                        label : "Prioritas",
                        value : "prioritas"
                    },
                    {
                        label : "Nama Vendor",
                        value : "nama_vendor",
                    },
                    {
                        label : "Harga Perbaikan",
                        value : "harga_perbaikan",
                    },
                    {
                        label : "tgl. Estimasi Pekerjaan",
                        value : "tgl_estimasi_pekerjaan",
                    },
                    {
                        label : "tgl. Selesai Pekerjaan",
                        value : "tgl_selesai_pekerjaan",
                    },
                    {
                        label : "Status",
                        value : "status",
                    },
                ],
                content : history.map( ( item : DatumResponseHistoryEntity, index : number ) => {
                    return {
                        "no" : index + 1,
                        "pengajuan_name" : item.pengajuan_name,
                        "nama_pemohon" : item.user.nama,
                        "departemen" : item.departemen,
                        "tgl_pengajuan" : FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ),
                        "prioritas" : item.prioritas,
                        "nama_vendor" : item.vendor_id === null ? '-' : item.vendor_id.toString(),
                        "harga_perbaikan" : item.harga.toString(),
                        "tgl_estimasi_pekerjaan" : item.tanggal_mulai === null ? '-' : FormatDate.stringDateToStringLocale( item.tanggal_mulai ),
                        "tgl_selesai_pekerjaan" : item.tanggal_selesai === null ? '-' : FormatDate.stringDateToStringLocale( item.tanggal_selesai ),
                        "status" : item.status,
                    }
                } )
            },
        ]

        let settings = {
            fileName : `History Pengajuan ${ FormatDate.reverseStringDate( getDataHistory.tglMulai ) } - ${ FormatDate.reverseStringDate( getDataHistory.tglSelesai ) }`,
        }
        xlsx( data, settings )
    }

    return <section className = "content">
        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">History Pengajuan</h5>
                        <p className = "mb-0 card-subtitle text-muted">
                        </p>
                    </div>
                    <div className = "card-body">
                        <div>
                            <div className = "row">
                                <div className = "col-12">
                                    <div className = "form-group">
                                        <div className = { `row` }>
                                            <div className = { `col-6 col-md-6` }>
                                                <TextInputPrimary label = { 'Start Date' }
                                                                  type = { 'date' }
                                                                  onChange = { ( event ) => {
                                                                      getDataHistory.tglMulai = event.target.value;
                                                                  } }/>
                                            </div>
                                            <div className = { `col-6 col-md-6` }>
                                                <TextInputPrimary label = { 'End Date' }
                                                                  type = { 'date' }
                                                                  onChange = { ( event ) => {
                                                                      getDataHistory.tglSelesai = event.target.value;
                                                                  } }/>
                                            </div>
                                            <div className = { `col-12` }>
                                                <div className = { `row` }>
                                                    <div className = { `col-12 col-md-6` }>
                                                        <ButtonPrimary label = { 'Download Excel' }
                                                                       full
                                                                       data = { 'button' }
                                                                       type = { 'btn-info' }
                                                                       onClick = { () => {
                                                                           downloadFile()
                                                                       } }/>
                                                    </div>
                                                    <div className = { `col-12 col-md-6` }>
                                                        <ButtonPrimary label = { 'Cari' }
                                                                       full
                                                                       data = { 'button' }
                                                                       onClick = { () => {
                                                                           getHistory( getDataHistory.tglMulai, getDataHistory.tglSelesai )
                                                                       } }/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "col-12 col-md-6">
                                    <div className = "form-group mt-10">
                                        <TextInputPrimary label = { 'Cari' }
                                                          placeholder = { 'Cari berdasarkan nama pengajuan' }
                                                          type = { 'text' }
                                                          onChange = { ( event ) => {
                                                              setSearchData( event.target.value );
                                                              getSearchHistory( event.target.value );
                                                          } }/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TableHistoryPengajuan
                            role = { 'admin' }
                            loading = { loading }
                            listPengajuan = { searchData.length > 0 ? searchHistory : history }/>
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
}
