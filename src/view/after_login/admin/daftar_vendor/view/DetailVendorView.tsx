"use client";
import React from "react";
import { DetailVendorViewModel } from "@/view/after_login/admin/daftar_vendor/view_model/DetailVendorViewModel";
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
export const DetailVendorView = () => {
    const {
        options,
        data,
        vendor,
        loading,
    } = DetailVendorViewModel()

    return <section className = "content printableArea">
        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">Detail Vendor</h5>
                        <a href = "javascript:window.print()" className = { `btn btn-info` }>Print</a>
                    </div>
                    <div className = "card-body">
                        <div className = { `row` }>
                            <div className = { `col-12 col-xl-12` }>
                                { detailVendor() }
                                { loading ? <div>
                                    loading...
                                </div> : <Bar className = { `max-h-500` }
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

    function detailVendor() {
        return <div className = { `col-12` }>
            <div className = { `row` }>
                <div className = { `col-12 col-md-6` }>
                    <div className = { `row` }>
                        <div className = { `col-6 col-md-4 col-xl-2` }>
                            No. Vendor
                        </div>
                        <div className = { `col-6 col-md-8 col-xl-10 text-bold` }>
                            {
                                vendor?.no_vendor
                            }
                        </div>
                        <div className = { `col-6 col-md-4 col-xl-2` }>
                            Nama Vendor
                        </div>
                        <div className = { `col-6 col-md-8 col-xl-10 text-bold` }>
                            {
                                vendor?.nama_vendor
                            }
                        </div>
                        <div className = { `col-6 col-md-4 col-xl-2` }>
                            Pemilik Vendor
                        </div>
                        <div className = { `col-6 col-md-8 col-xl-10 text-bold` }>
                            {
                                vendor?.pemilik_vendor
                            }
                        </div>
                        <div className = { `col-6 col-md-4 col-xl-2` }>
                            No. Tlp Vendor
                        </div>
                        <div className = { `col-6 col-md-8 col-xl-10 text-bold` }>
                            {
                                vendor?.telpon
                            }
                        </div>
                        <div className = { `col-6 col-md-4 col-xl-2` }>
                            Alamat
                        </div>
                        <div className = { `col-6 col-md-8 col-xl-10 text-bold` }>
                            {
                                vendor?.alamat
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
