import { VendorRepository, VendorRepositoryByYear } from "@/repository/vendor/list_vendor/VendorRepository";
import { useContext, useEffect, useState } from "react";
import { ModelVendor } from "@/view/after_login/admin/daftar_vendor/model/ModelVendor";
import { ModalContext } from "@/application/component/modal/ModalContext";
import { ModelAddVendor } from "@/view/after_login/admin/daftar_vendor/component/ModelAddVendor";
import { EditVendorRepository } from "@/repository/vendor/edit_vendor/EditVendorRepository";
import { DeletVendorRepository } from "@/repository/vendor/delete_vendor/DeletVendorRepository";


export const DaftarVendorViewModel = () => {


    const modal = useContext( ModalContext );
    const [ vendor, setVendor ] = useState<ModelVendor[]>( [] );
    const [ loading, setLoading ] = useState( false );
    const [ year, setYear ] = useState( 0 );


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
                }
            } )
            setVendor( dataVendor );
        }
        setLoading( false )
    }


    const editDataVendor = async ( id : number, data : ModelAddVendor ) => {
        const resp = await EditVendorRepository( id, data );
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
        modal.hide();
    }

    useEffect( () => {
        setYear( new Date().getFullYear() );
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
    }
}
