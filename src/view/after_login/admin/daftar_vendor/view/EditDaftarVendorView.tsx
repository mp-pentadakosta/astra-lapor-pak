"use client";
import {TextInputPrimary} from "@/application/component/input/TextInputPrimary";
import {InputTextArea} from "@/application/component/input/InputTextArea";
import {ButtonPrimary} from "@/application/component/button/ButtonPrimary";
import React from "react";
import {EditVendorViewModel} from "@/view/after_login/admin/daftar_vendor/view_model/EditVendorViewModel";

export const EditDaftarVendorView = () => {
    const {
        errors,
        register,
        router,
        handleSubmit,
        submitEdit,
    } = EditVendorViewModel()
    return <section className="content">
        <div className="row">
            <div className="col-12 col-xl-12">
                <form onSubmit={handleSubmit(submitEdit)}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Edit Vendor</h5>
                        </div>
                        <div className="card-body">
                            <TextInputPrimary label={'No Vendor'}
                                              type={'text'}

                                              id={'no_vendor'}
                                              data={register('no_vendor')}/>
                            <TextInputPrimary label={'Nama Vendor'}
                                              type={'text'}
                                              id={'nama_vendor'}
                                              data={register('nama_vendor')}
                                              isError={errors.nama_vendor !== undefined}
                                              messageError={errors.nama_vendor?.message}/>
                            <TextInputPrimary label={'Pemilik Vendor'}
                                              type={'text'}
                                              id={'pemilik_vendor'}
                                              data={register('pemilik_vendor')}
                                              messageError={errors.pemilik_vendor?.message}
                                              isError={errors.pemilik_vendor !== undefined}/>
                            <TextInputPrimary label={'Telepon'}
                                              type={'text'}
                                              id={'telpon'}
                                              data={register('telpon')}
                                              messageError={errors.telpon?.message}
                                              isError={errors.telpon !== undefined}/>
                            <InputTextArea label={'Alamat'}
                                           id={'alamat'}
                                           data={register('alamat')}
                                           messageError={errors.alamat?.message}
                                           isError={errors.alamat !== undefined}/>
                        </div>
                        <div className={`card-footer`}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <ButtonPrimary
                                    label={'Kembali'}
                                    type={"btn-danger"}
                                    onClick={() => {
                                        router.back()
                                    }}/>
                                <ButtonPrimary
                                    data={'submit'}
                                    label={'Simpan'}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
}
