"use client";
import {DetailVendorViewModel} from "@/view/after_login/admin/daftar_vendor/view_model/DetailVendorViewModel";
import {Line} from "react-chartjs-2";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const ChartVendorView = () => {
    const {options, data} = DetailVendorViewModel()

    return <section className="content">
        <div className="row">
            <div className="col-12 col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Detail Vendor</h5>
                    </div>
                    <div className="card-body">
                        <div className={`row`}>
                            <div className={`col-12 col-xl-12`}>
                                <Line options={options}
                                      data={data}/>
                            </div>
                        </div>
                    </div>
                    <div className={`card-footer`}>

                    </div>
                </div>
            </div>
        </div>
    </section>
}
