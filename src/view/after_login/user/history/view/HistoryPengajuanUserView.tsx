"use client";
import {TableHistoryPengajuan} from "@/utils/component/table/TableHistoryPengajuan";
import {FaAngleDoubleDown} from "react-icons/fa";
import {HistoryUserViewModel} from "@/view/after_login/user/history/view_model/HistoryUserViewModel";
import {TextInputPrimary} from "@/application/component/input/TextInputPrimary";
import {ButtonPrimary} from "@/application/component/button/ButtonPrimary";
import {ModelGetHistory} from "@/view/after_login/user/history/model/ModelGetHistory";


export const HistoryPengajuanUserView = () => {
    const {
        history,
        getHistory,
        loading,
        searchHistory,
        getSearchHistory,
        searchData,
        setSearchData,
    } = HistoryUserViewModel()

    let getDataHistory: ModelGetHistory = {
        tglMulai: '',
        tglSelesai: '',
    }


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
                                <div className="col-12">
                                    <div className="form-group">
                                        <div className={`row`}>
                                            <div className={`col-6 col-md-6`}>
                                                <TextInputPrimary label={'Start Date'}
                                                                  type={'date'}
                                                                  onChange={(event) => {
                                                                      getDataHistory.tglMulai = event.target.value;
                                                                  }}/>
                                            </div>
                                            <div className={`col-6 col-md-6`}>
                                                <TextInputPrimary label={'End Date'}
                                                                  type={'date'}
                                                                  onChange={(event) => {
                                                                      getDataHistory.tglSelesai = event.target.value;
                                                                  }}/>
                                            </div>
                                            <div className={`col-12`}>
                                                <ButtonPrimary label={'Cari'}
                                                               full
                                                               data={'button'}
                                                               onClick={() => {
                                                                   getHistory(getDataHistory.tglMulai, getDataHistory.tglSelesai)
                                                               }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group mt-10">
                                        <TextInputPrimary label={'Cari'}
                                                          placeholder={'Cari berdasarkan nama pengajuan'}
                                                          type={'text'}
                                                          onChange={(event) => {
                                                              setSearchData(event.target.value);
                                                              getSearchHistory(event.target.value);
                                                          }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TableHistoryPengajuan
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
