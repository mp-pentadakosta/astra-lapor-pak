import { StatusCardStyle } from "@/utils/component/status/StatusCardStyle";
import Link from "next/link";
import { ModelDaftarPenhajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelDaftarPenhajuan";
import React from "react";
import { PriorotasCardStyle } from "@/utils/component/prioritas/PriorotasCardStyle";


interface InterfaceTableDaftarPengajaun {
    loading : boolean
    listPengajuan : ModelDaftarPenhajuan[]
}

export const TableDaftarPengajaun = ( props : InterfaceTableDaftarPengajaun ) => {
    return <>
        <table className = "table">
            <thead>
            <tr>
                <th style = { {
                    width : "15%",
                } }>Nama Barang
                </th>
                <th style = { {
                    width : "15%",
                } }>Nama Pemohon
                </th>
                <th style = { {
                    width : "15%",
                } }>Departemen
                </th>
                <th className = "d-none d-md-table-cell"
                    style = { {
                        width : "15%",
                    } }>Tanggal Pengajuan
                </th>
                <th className = "d-none d-md-table-cell"
                    style = { {
                        width : "15%",
                    } }>Prioritas
                </th>
                <th className = "d-none d-md-table-cell"
                    style = { {
                        width : "15%",
                    } }>Status
                </th>
                <th style = { {
                    width : "15%",
                } }>Actions
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.listPengajuan.map( ( item, index ) => {
                    return <tr key = { index }>
                        <td>{ item.namaBarang }</td>
                        <td>{ item.namaPemohon }</td>
                        <td>{ item.departemen }</td>
                        <td>{ item.tanggalPengajuan }</td>
                        <td>
                            <div style = { {
                                display : "flex",
                            } }>
                                <PriorotasCardStyle data = { item.prioritas }/>
                            </div>
                        </td>
                        <td className = "d-none d-md-table-cell text-fade">
                            <div style = { {
                                display : "flex",
                            } }>
                                <StatusCardStyle data = { item.status }/>
                            </div>
                        </td>
                        <td className = "table-action min-w-100">
                            <Link href = { `/admin/daftar-pengajuan/` + item.id }
                                  className = "text-fade hover-primary">
                                <i className = "align-middle fa fa-tags fa-lg">
                                </i>
                            </Link>
                        </td>
                    </tr>
                } )
            }
            </tbody>
        </table>
        {
            props.loading ? <div style = { {
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                marginTop : "20px",
                marginBlock : "20px",
            } }>
                Tutunggu sebentar...
            </div> : (
                props.listPengajuan.length === 0 ? <div style = { {
                    display : "flex",
                    justifyContent : "center",
                    alignItems : "center",
                    marginTop : "20px",
                    marginBlock : "20px",
                } }>
                    Tidak ada data
                </div> : null
            )
        }
    </>
}


