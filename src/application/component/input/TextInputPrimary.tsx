import {ChangeEventHandler, HTMLInputTypeAttribute} from "react";


interface Interface {
    label: string
    id?: string
    type: HTMLInputTypeAttribute | undefined
    value?: string
    defaultValue?: string
    disable?: boolean
    raedOnly?: boolean
    hidden?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    isError?: boolean
    messageError?: string
    data?: any
    placeholder?: string
}

export const TextInputPrimary = (props: Interface,) => {
    return <div className="form-group">
        <label className="form-label">{props.label}</label>
        <input type={props.type}
               id={props.id}
               {
                   ...props.data
               }
               placeholder={props.placeholder}
               value={props.value}
               className={`form-control ${props.isError ? 'is-invalid' : ''}`}
               defaultValue={props.defaultValue}
               disabled={props.disable}
               readOnly={props.raedOnly}
               hidden={props.hidden}
               onChange={props.onChange}/>
        <div className="invalid-feedback">{props.messageError}</div>
    </div>
}
