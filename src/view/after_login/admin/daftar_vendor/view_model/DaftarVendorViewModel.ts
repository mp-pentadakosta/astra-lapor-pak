import {  VendorRepositoryByYear } from "@/repository/vendor/list_vendor/VendorRepository";
import { useContext, useEffect, useState } from "react";
import { ModelVendor } from "@/view/after_login/admin/daftar_vendor/model/ModelVendor";
import { ModalContext } from "@/application/component/modal/ModalContext";
import { ModelAddVendor } from "@/view/after_login/admin/daftar_vendor/component/ModelAddVendor";
import { EditVendorRepository } from "@/repository/vendor/edit_vendor/EditVendorRepository";
import { DeletVendorRepository } from "@/repository/vendor/delete_vendor/DeletVendorRepository";
import xlsx from "json-as-xlsx";


export const DaftarVendorViewModel = () => {


    const modal = useContext( ModalContext );
    const [ vendor, setVendor ] = useState<ModelVendor[]>( [] );
    const [ loading, setLoading ] = useState( false );
    const [ year, setYear ] = useState( '0' );


    const getDataVendor = async ( year : string ) => {
        setLoading( true )
        const resp = await VendorRepositoryByYear( year );
        if ( resp !== null ) {
            const dataVendor : ModelVendor[] = resp.data.map( ( item ) => {
                return {
                    id : item.id,
                    noVendor : item.no_vendor,
                    namaVendor : item.nama_vendor,
                    pemilikVendor : item.pemilik_vendor,
                    alamat : item.alamat,
                    telpon : item.telpon,
                    order : {
                        good : item.countGood ?? 0,
                        rate : Number(item.rate ?? "0") ?? 0,
                        poor : item.countPoor ?? 0,
                        veryGood : item.countVeryGood ?? 0,
                        veryPoor : item.countVeryPoor ?? 0,
                    }
                }
            } )
            setVendor( dataVendor );
        }
        setLoading( false )
    }


    const editDataVendor = async ( id : number, data : ModelAddVendor ) => {
         await EditVendorRepository( id, data );
        modal.hide();
    }

    const [ searchVendor, setSearchVendor ] = useState<ModelVendor[]>( [] );

    const [ search, setSearch ] = useState( '' );

    const getSearchVendor = ( data : string ) => {
        const search = vendor.filter( ( item ) => {
            return item.namaVendor.toLowerCase().includes( data.toLowerCase() )
        } )
        setSearchVendor( search );
    }

    const deletedVendor = async ( id : number ) => {
        const resp = await DeletVendorRepository( id );
        if ( resp !== null ) {
            modal.hide();
            getDataVendor( year );
        }
    }

    const downloadFileVendor = () => {

        let data = [
            {
                sheet : "Adults",
                columns : [
                    {
                        label : "No",
                        value : "no",
                    },
                    {
                        label : "No Vendor",
                        value : "no_vendor"
                    },
                    {
                        label : "Nama Vendor",
                        value : "nama_vendor"
                    },
                    {
                        label : "Pemilik Vendor",
                        value : "pemilik_vendor"
                    },
                    {
                        label : "Telepon",
                        value : "tlp"
                    },
                    {
                        label : "Alamat",
                        value : "alamat"
                    },
                    {
                        label : "Good",
                        value : "good",
                    },
                    {
                        label : "Very Good",
                        value : "very_good",
                    },
                    {
                        label : "Poor",
                        value : "poor",
                    },
                    {
                        label : "Very Poor",
                        value : "very_poor",
                    },
                    {
                        label : "Rating",
                        value : "rating",
                    },
                ],
                content : vendor.map( ( item : ModelVendor, index : number ) => {
                    return {
                        "no" : index + 1,
                        "no_vendor" : item.noVendor,
                        "nama_vendor" : item.namaVendor,
                        "pemilik_vendor" : item.pemilikVendor,
                        "tlp" : item.telpon,
                        "alamat" : item.alamat,
                        "good" : item.order.good,
                        "very_good" : item.order.veryGood,
                        "poor" : item.order.poor,
                        "rating" : item.order.rate,
                    }
                } )
            },
        ]
        let settings = {
            fileName : `Vendor - Tahun` + year,
        }
        xlsx( data, settings )
    }

    useEffect( () => {
        setYear( new Date().getFullYear().toString() );
        getDataVendor(
            new Date().getFullYear().toString()
        );
        return () => {

        };
    }, [] );


    return {
        vendor,
        loading,
        modal,
        getSearchVendor,
        editDataVendor,
        deletedVendor,
        searchVendor,
        search,
        setSearch,
        setYear,
        year,
        getDataVendor,
        downloadFileVendor
    }
}
