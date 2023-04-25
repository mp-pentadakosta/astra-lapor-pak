"use client";
import React from "react";
import {TextInputPrimary} from "@/application/component/input/TextInputPrimary";
import {InputSelectOption} from "@/application/component/input/InputSelectOption";
import {InputTextArea} from "@/application/component/input/InputTextArea";
import {InputFilePrimary} from "@/application/component/input/InputFilePrimary";
import {
    TambahPengajuanUserViewModel
} from "@/view/after_login/user/daftar_pengajuan/view_model/TambahPengajuanUserViewModel";
import {ButtonPrimary} from "@/application/component/button/ButtonPrimary";

export const TambahPengajuanUserView = () => {

    const {
        register,
        errors,
        handleSubmit,
        router,
        setValue,
        listPrioritas,
        getValues,
        submitPengajuan,
    } = TambahPengajuanUserViewModel();

    return <section className="content">
        <div className="row">
            <div className="col-12 col-xl-12">
                <form onSubmit={handleSubmit(submitPengajuan)}>
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Tambah Pengajuan</h5>
                        </div>
                        <div className="card-body">
                            <TextInputPrimary label={'Jenis Keluhan'}
                                              data={register('pengajuan_name')}
                                              id={'pengajuan_name'}
                                              messageError={errors.pengajuan_name?.message}
                                              isError={errors.pengajuan_name !== undefined}
                                              type={'text'}/>
                            <InputSelectOption label={'Prioritas'}
                                               id={'prioritas'}
                                               isError={errors.prioritas !== undefined}
                                               messageError={errors.prioritas?.message}
                                               data={register('prioritas')}
                                               value={listPrioritas}/>
                            <InputTextArea label={'Deskripsi'}
                                           id={'deskripsi'}
                                           data={register('deskripsi')}
                                           isError={errors.deskripsi !== undefined}
                                           messageError={errors.deskripsi?.message}/>
                            <InputFilePrimary label={'Masukan Foto'}
                                              id={'foto'}
                                              data={register('foto')}
                                              messageError={errors.foto?.message}
                                              isError={errors.foto !== undefined}
                                              isMultiple={true}
                                              onInput={(event) => {
                                                  const files = event.currentTarget.files;
                                                  if (files) {
                                                      for (let i = 0; i < files.length; i++) {
                                                          const file = files[i];
                                                          const reader = new FileReader();
                                                          reader.onload = (eventData) => {
                                                              setValue('foto', [...getValues("foto"), {
                                                                  image: eventData.target?.result as string,
                                                              }]);
                                                          };
                                                          reader.readAsDataURL(file);
                                                      }
                                                  }
                                              }}/>
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
