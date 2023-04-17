import { PriorotasCardStyle } from "@/utils/component/prioritas/PriorotasCardStyle";
import { StatusCardStyle } from "@/utils/component/status/StatusCardStyle";
import Link from "next/link";
import React from "react";
import { FaBuffer } from "react-icons/fa";
import { DatumResponseHistoryEntity } from "@/repository/admin/history/entity/ResponseHistoryEntity";
import FormatDate from "@/utils/utils/format_date/FormatDate";
import { useRouter } from "next/navigation";
import useWindowSize from "@rooks/use-window-size";


interface InterfaceTableHistoryPengajaun {
    loading : boolean
    listPengajuan : DatumResponseHistoryEntity[]
}

export const TableHistoryPengajuan = ( props : InterfaceTableHistoryPengajaun ) => {
    const size = useWindowSize()
    let sizeWidth = size.innerWidth ?? 1000;
    return <>
        <div className = { `table-responsive` } style = { {
            maxHeight : sizeWidth > 768 ? "500px" : "300px",
        } }>
            <table className = "table">
                <thead>
                <tr>
                    <th style = { {
                        width : "5%",
                    } }>No
                    </th>
                    <th style = { {
                        width : "15%",
                    } }>Nama Pengajuan
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
                </tr>
                </thead>
                <tbody>
                {
                    props.listPengajuan.map( ( item, index ) => {
                        return <tr key = { index }>
                            <td>{ index + 1 }</td>
                            <td>{ item.pengajuan_name }</td>
                            <td>{ item.user_id }</td>
                            <td>{ item.departemen }</td>
                            <td>{ FormatDate.stringDateToStringLocale( item.tanggal_pengajuan ) }</td>
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
