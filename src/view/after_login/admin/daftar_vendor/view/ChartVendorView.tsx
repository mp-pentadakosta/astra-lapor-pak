"use client";
import React from "react";
import { CharViewModel } from "@/view/after_login/admin/daftar_vendor/view_model/CharViewModel";
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const ChartVendorView = () => {
    const {
        options,
        data,
        loading,
        getListVendor,
        year,
        setYear
    } = CharViewModel()

    return <section className = "content">
        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">Detail Vendor</h5>
                    </div>
                    <div className = "card-body">
                        <div className = { `col-12 row` }>
                            <div className = { `col-12 col-md-6` }>
                                <TextInputPrimary label = { 'Tahun' }
                                                  type = { 'number' }
                                                  defaultValue = { year === "0" ? new Date().getFullYear().toString() : year }
                                                  placeholder = { 'Tahun' }
                                                  onChange = { ( event ) => {
                                                      setYear( event.target.value )
                                                  } }/>
                                <ButtonPrimary label = { 'Cari' }
                                               onClick = { () => {
                                                   getListVendor( year )
                                               } }/>
                            </div>
                        </div>
                        <div className = { `row` }>
                            <div className = { `col-12 col-xl-12 scrollable-content` }>
                                { loading ? <div>
                                    loading...
                                </div> : <Bar className = { `max-h-300` }
                                              options = { options }
                                              data = { data }/> }
                            </div>
                        </div>
                    </div>
                    <div className = { `card-footer` }>

                    </div>
                </div>
            </div>
        </div>
    </section>
}
