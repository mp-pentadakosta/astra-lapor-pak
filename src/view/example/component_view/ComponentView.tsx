'use client';
import { TextInputPrimary } from "@/application/component/input/TextInputPrimary";
import { InputFilePrimary } from "@/application/component/input/InputFilePrimary";
import { InputShowHidePassword } from "@/application/component/input/InputShowHidePassword";
import { InputSelectOption } from "@/application/component/input/InputSelectOption";
import { InputTextArea } from "@/application/component/input/InputTextArea";
import { ModalContext } from "@/application/component/modal/ModalContext";
import { useContext } from "react";
import { ToastContext, ToastData } from "@/application/component/alert/ToastData";
import { ButtonPrimary } from "@/application/component/button/ButtonPrimary";


export const ComponentView = () => {
    const modal = useContext( ModalContext );
    const toats = useContext( ToastContext );
    return <section className = "content">

        <div className = "row">
            <div className = "col-12 col-xl-12">
                <div className = "card">
                    <div className = "card-header">
                        <h5 className = "card-title">Component</h5>
                        <p className = "mb-0 card-subtitle text-muted">
                            lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className = "card-body">
                        <div className = { `row` }>
                            <div className = { `col-12 col-xl-6` }>
                                <TextInputPrimary label = { "Input" } type = { "text" }/>
                            </div>
                            <div className = { `col-12 col-xl-6` }>
                                <InputFilePrimary label = { "Input File" }/>
                            </div>
                            <div className = { `col-12 col-xl-6` }>
                                <InputShowHidePassword/>
                            </div>
                            <div className = { `col-12 col-xl-6` }>
                                <InputSelectOption label = { "Select Option" } value = { [] }/>
                            </div>
                            <div className = { `col-12 col-xl-6` }>
                                <InputTextArea label = { "Text Area" }/>
                            </div>
                            <div className = { `col-12 col-xl-6` }>
                                <ButtonPrimary label = { "Button" }/>
                            </div>
                            <div className = { `col-12 col-xl-6` }>
                                <div className = { `row` }>
                                    <div className = { `col-12 col-xl-6` }>
                                        <button type = "button" className = "btn btn-secondary" onClick = { () => {
                                            modal.show();
                                        } }>Modal
                                        </button>
                                    </div>
                                    <div className = { `col-12 col-xl-6` }>
                                        <button type = "button" className = "btn btn-secondary" onClick = { () => {
                                            toats.show( true );
                                        } }>Toast
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
