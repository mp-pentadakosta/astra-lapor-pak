import {FormEventHandler, useState} from "react";


interface Interface {
    label: string;
    isMultiple?: boolean;
    onInput?: FormEventHandler<HTMLInputElement> | undefined
    isError?: boolean
    messageError?: string
    data?: any
    id?: string
}

export const InputFilePrimary = (props: Interface) => {
    const [base64, setBase64] = useState<string[]>([]);
    return <div className="form-group">
        <label htmlFor="formFileMultiple" className="form-label">{props.label}</label>
        <input className={`form-control ${props.isError ? 'is-invalid' : ''}`}
               type={'file'}
               id={props.id}
               multiple={props.isMultiple}
               onInput={props.onInput}/>
        <div className="invalid-feedback">{props.messageError}</div>
    </div>
}
