"use client"
import {TableHistoryPengajuan} from "@/utils/component/table/TableHistoryPengajuan";
import {FaAngleDoubleDown} from "react-icons/fa";
import {HistoryAtasanViewModel} from "@/view/after_login/atasan/history/view_model/HistoryAtasanViewModel";


export const HistoryPengajuanAtasanView = () => {
    const {
        history,
        getHistory,
        loading,
        getSearchHistory,
        searchHistory,
        searchData,
        setSearchData
    } = HistoryAtasanViewModel();
    return <section className="content">
        <div className="row">
            <div className="col-12 col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">History Pengajuan</h5>
                        <p className="mb-0 card-subtitle text-muted">
                        </p>
                    </div>
                    <div className="card-body">
                        <div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <input type="text"
                                               className="form-control"
                                               id="nama"
                                               onChange={(event) => {
                                                   setSearchData(event.target.value);
                                                   getSearchHistory(event.target.value);
                                               }}
                                               placeholder="Cari..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TableHistoryPengajuan
                            role={'atasan'}
                            loading={loading}
                            listPengajuan={searchData.length > 0 ? searchHistory : history}/>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button type="button"
                                        className="btn btn-info-light ajax"
                                        title="">
                                    <FaAngleDoubleDown style={{
                                        marginRight: "5px"
                                    }}/>
                                    {/*<i className = "fa fa-spin fa-refresh"></i>&nbsp; */}
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
