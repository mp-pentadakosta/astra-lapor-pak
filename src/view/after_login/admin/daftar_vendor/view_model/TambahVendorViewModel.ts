import {usePathname, useRouter} from "next/navigation";
import * as Yup from 'yup';
import {SubmitHandler, useForm} from 'react-hook-form';
import {TypeModelVendor} from "@/view/after_login/admin/daftar_vendor/model/ModelAddVendor";
import {yupResolver} from "@hookform/resolvers/yup";
import {AddVendorRepository} from "@/repository/vendor/add_vendor/AddVendorRepository";

export const TambahVendorViewModel = () => {
    const router = useRouter();

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

    const addDataVendor: SubmitHandler<TypeModelVendor> = async (data) => {
        const resp = await AddVendorRepository(data ?? {
            no_vendor: '',
            nama_vendor: '',
            pemilik_vendor: '',
            alamat: '',
            telpon: '',
        });
        if (resp !== null) {
            reset()
        }
    }

    return {
        addDataVendor,
        router,
        validationSchema,
        handleSubmit,
        register,
        errors
    }
}
