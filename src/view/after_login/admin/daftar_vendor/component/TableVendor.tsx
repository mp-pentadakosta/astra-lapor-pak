import React from "react";
import { ModelVendor } from "@/view/after_login/admin/daftar_vendor/model/ModelVendor";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";


interface InterfaceTableDaftarPengajaun {
    loading : boolean
    listPengajuan : ModelVendor[]
    editVendor : ( data : ModelVendor ) => void
    deleteVendor : ( data : ModelVendor ) => void
}

export const TableVendor = ( props : InterfaceTableDaftarPengajaun ) => {
    return <>
        <div className = { `table-responsive` }>
            <table className = "table">
                <thead>
                <tr>
                    <th style = { {
                        width : "5%",
                    } }>
                        No
                    </th>
                    <th style = { {
                        width : "15%",
                    } }>Nama Vendor
                    </th>
                    <th style = { {
                        width : "15%",
                    } }>Pemilik Vendor
                    </th>
                    <th style = { {
                        width : "15%",
                    } }>Telpon
                    </th>
                    <th style = { {
                        width : "15%",
                    } }>Alamat
                    </th>
                    <th style = { {
                        width : "15%",
                    } }>Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    props.listPengajuan.map( ( item, index ) => {
                        return <tr key = { index }>
                            <td>{ index + 1 }</td>
                            <td>{ item.namaVendor }</td>
                            <td>{ item.pemilikVendor }</td>
                            <td>{ item.telpon }</td>
                            <td>{ item.alamat }</td>
                            <td>
                                <ButtonPrimary type = { 'btn-warning' } label = { "Edit" } onClick = { () => {
                                    props.editVendor( item )
                                } }/>
                                <ButtonPrimary type = { 'btn-danger' } label = { "Hapus" } onClick = { () => {
                                    props.deleteVendor( item )
                                } }/>
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


