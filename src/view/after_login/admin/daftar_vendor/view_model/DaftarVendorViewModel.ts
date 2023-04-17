import { VendorRepository } from "@/repository/vendor/list_vendor/VendorRepository";
import { useContext, useEffect, useState } from "react";
import { ModelVendor } from "@/view/after_login/admin/daftar_vendor/model/ModelVendor";
import { ModalContext } from "@/application/component/modal/ModalContext";
import { ModelAddVendor } from "@/view/after_login/admin/daftar_vendor/component/ModelAddVendor";
import { AddVendorRepository } from "@/repository/vendor/add_vendor/AddVendorRepository";
import { usePathname, useRouter } from "next/navigation";
import { EditVendorRepository } from "@/repository/vendor/edit_vendor/EditVendorRepository";
import { DeletVendorRepository } from "@/repository/vendor/delete_vendor/DeletVendorRepository";


export const DaftarVendorViewModel = () => {
    const router = useRouter();
    const path = usePathname();

    const modal = useContext( ModalContext );
    const [ vendor, setVendor ] = useState<ModelVendor[]>( [] );
    const [ loading, setLoading ] = useState( false );

    const [ addVendor, setAddVendor ] = useState<ModelAddVendor>();
    const getDataVendor = async () => {
        setLoading( true )
        const resp = await VendorRepository();
        if ( resp !== null ) {
            const dataVendor : ModelVendor[] = resp.data.map( ( item ) => {
                return {
                    id : item.id,
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

    const addDataVendor = async ( data : ModelAddVendor ) => {
        const resp = await AddVendorRepository( data );
        router.replace( path )
        modal.hide();
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
        getDataVendor();
        return () => {

        };
    }, [] );


    return {
        vendor,
        loading,
        modal,
        addVendor,
        setAddVendor,
        addDataVendor,
        getSearchVendor,
        editDataVendor,
        deletedVendor,
        searchVendor,
        search,
        setSearch,
    }
}
