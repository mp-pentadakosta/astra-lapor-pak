import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModelTambahPengajuanUser } from "@/view/after_login/user/daftar_pengajuan/model/ModelTambahPengajuanUser";
import { useRouter } from "next/navigation";
import { ModelSelectOption } from "@/application/component/input/model/ModelSelectOption";
import { RepositoryAddPengajuan } from "@/repository/user/add_pengajuan/RepositoryAddPengajuan";
import { useState } from "react";


export const TambahPengajuanUserViewModel = () => {

    const router = useRouter();

    const listPrioritas : ModelSelectOption[] = [
        {
            key : '0',
            value : '',
            title : 'Pilih Prioritas',
        },
        {
            key : '1',
            value : 'Low',
            title : 'Low',
        },
        {
            key : '2',
            value : 'Normal',
            title : 'Normal',
        },
        {
            key : '3',
            value : 'High',
            title : 'High',
        },
    ]


    const validationSchema = Yup.object().shape( {
        pengajuan_name : Yup.string().required( 'Jenis Keluhan harus di isi' ),
        deskripsi : Yup.string().required( 'Deskripsi tidak boleh kosong' ),
        prioritas : Yup.string().required( 'Prioritas harus di isi' ),
        foto : Yup.mixed<FileList>().test(
            "required",
            "Foto minimal 1",
            ( value ) => {
                if ( value !== undefined ) {
                    return value.length > 0;
                }
                else {
                    return false;
                }
            }
        )
    } )

    const {
        register,
        handleSubmit,
        formState : { errors },
        reset,
        setValue,
        getValues,
    } = useForm<ModelTambahPengajuanUser>( {
        defaultValues : {
            pengajuan_name : '',
            deskripsi : '',
            prioritas : '',
            foto : [],
        },
        resolver : yupResolver( validationSchema )
    } );


    const [ loading, setLoading ] = useState( false );


    const submitPengajuan : SubmitHandler<ModelTambahPengajuanUser> = async ( data ) => {
        setLoading( true );
        const resp = await RepositoryAddPengajuan( data )
        if ( resp !== null ) {
            reset()
        }
        setLoading( false );
    }


    return {
        register,
        handleSubmit,
        errors,
        router,
        listPrioritas,
        setValue,
        getValues,
        submitPengajuan,
        loading
    }
}
