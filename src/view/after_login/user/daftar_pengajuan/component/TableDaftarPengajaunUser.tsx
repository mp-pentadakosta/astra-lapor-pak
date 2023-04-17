import { StatusCardStyle } from "@/utils/component/status/StatusCardStyle";
import { ModelDaftarPenhajuan } from "@/view/after_login/admin/daftar_pengajuan/model/ModelDaftarPenhajuan";
import React from "react";
import { PriorotasCardStyle } from "@/utils/component/prioritas/PriorotasCardStyle";
import { useRouter } from "next/navigation";


interface InterfaceTableDaftarPengajaun {
    role : string
    loading : boolean
    listPengajuan : ModelDaftarPenhajuan[]
}

export const TableDaftarPengajaunUser = ( props : InterfaceTableDaftarPengajaun ) => {
    const route = useRouter()
    return <>
        <div className = { `table-responsive` } style = { {
            maxHeight : "500px",
        } }>
            <table className = "table">
                <thead style = { {
                    backgroundColor : "#f5f5f5",
                    position : "sticky",
                    top : "0",
                } }>
                <tr>
                    <th style = { {
                        width : "5%",
                    } }>No.
                    </th>
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
                    <th style = { {
                        width : "15%",
                    } }>Tanggal Pengajuan
                    </th>
                    <th style = { {
                        width : "10%",
                    } }>Prioritas
                    </th>
                    <th style = { {
                        width : "20%",
                    } }>Status
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    props.listPengajuan.map( ( item, index ) => {
                        return <tr key = { index }
                                   className = { `hover hover-success` }
                                   onClick = { () => {
                                       // `/admin/daftar-pengajuan/` + item.id
                                       if ( props.role === 'admin' ) {
                                           route.push( `/admin/daftar-pengajuan/` + item.id )
                                       }
                                       if ( props.role === 'user' ) {
                                           route.push( `/user/daftar-pengajuan/` + item.id )
                                       }
                                       if ( props.role === 'atasan' ) {
                                           route.push( `/atasan/daftar-pengajuan/` + item.id )
                                       }
                                   } }
                                   style = { {
                                       cursor : 'pointer',
                                   } }>
                            <td>{ index + 1 }</td>
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
                            <td>
                                <div style = { {
                                    display : "flex",
                                } }>
                                    <StatusCardStyle data = { item.status }/>
                                </div>
                            </td>
                        </tr>
                    } )
                }
                </tbody>
            </table>
        </div>
        {
            props.loading ? <div style = { {
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                marginTop : "20px",
                marginBlock : "20px",
            } }>
                Tunggu sebentar...
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


