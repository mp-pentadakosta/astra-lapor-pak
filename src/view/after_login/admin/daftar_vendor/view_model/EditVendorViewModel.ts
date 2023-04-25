import {usePathname, useRouter} from "next/navigation";
import * as Yup from "yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {TypeModelVendor} from "@/view/after_login/admin/daftar_vendor/model/ModelAddVendor";
import {yupResolver} from "@hookform/resolvers/yup";
import {AddVendorRepository} from "@/repository/vendor/add_vendor/AddVendorRepository";
import {RepositoryDetailVendor} from "@/repository/vendor/detail_vendor/RepositoryDetailVendor";
import {useEffect} from "react";
import {EditVendorRepository} from "@/repository/vendor/edit_vendor/EditVendorRepository";

export const EditVendorViewModel = () => {
    const router = useRouter();
    const pathname = usePathname();
    const getId = () => {
        const splitPath = pathname.split('/');
        const id = splitPath[splitPath.length - 1];
        console.log('id', id)
        return parseInt(id);
    }


    const validationSchema = Yup.object().shape({
        no_vendor: Yup.string(),
        nama_vendor: Yup.string().required('Nama Vendor harus di isi'),
        pemilik_vendor: Yup.string().required('Pemilik Vendor harus di isi'),
        alamat: Yup.string().required('Alamat harus di isi'),
        telpon: Yup.string().required('Telpon harus di isi'),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue
    } = useForm<TypeModelVendor>({
        defaultValues: {
            no_vendor: '',
            alamat: '',
            nama_vendor: '',
            pemilik_vendor: '',
            telpon: '',
        },
        resolver: yupResolver(validationSchema)
    });

    const submitEdit: SubmitHandler<TypeModelVendor> = async (data) => {
        const resp = await EditVendorRepository(getId(), data);
        if (resp !== null) {
            router.back()
        }
    }

    const getDetailVendor = async () => {
        const resp = await RepositoryDetailVendor(getId());
        if (resp !== null) {
            setValue('no_vendor', resp.data.no_vendor)
            setValue('nama_vendor', resp.data.nama_vendor)
            setValue('pemilik_vendor', resp.data.pemilik_vendor)
            setValue('alamat', resp.data.alamat)
            setValue('telpon', resp.data.telpon)
        }

    }

    useEffect(() => {
        getDetailVendor();
        return () => {

        };
    }, []);


    return {
        submitEdit,
        router,
        validationSchema,
        handleSubmit,
        register,
        errors
    }

}
