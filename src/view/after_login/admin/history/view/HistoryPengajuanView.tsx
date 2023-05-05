"use client";
import { TableHistoryPengajuan } from "@/utils/component/table/TableHistoryPengajuan";
import { FaAngleDoubleDown } from "react-icons/fa";
import { HistoryAdminViewModel } from "@/view/after_login/admin/history/view_model/HistoryAdminViewModel";
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";


export const HistoryPengajuanView = () => {

    const {
        getHistory,
        history,
        loading,
        getSearchHistory,
        searchHistory,
        searchData,
        setSearchData,
        downloadExcel,
        loadingExcel,
        date,
        setDate,
    } = HistoryAdminViewModel()

    // let getDataHistory : ModelGetHistory = {
    //     tglMulai : '',
    //     tglSelesai : '',
    // }


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
                                                                      // getDataHistory.tglMulai = event.target.value;
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
                                                                           getHistory( date.startDate, date.endDate )
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
