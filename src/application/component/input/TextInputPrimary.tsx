import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";


interface Interface {
    label : string
    type : HTMLInputTypeAttribute | undefined
    value? : string
    defaultValue? : string
    disable? : boolean
    raedOnly? : boolean
    hidden? : boolean
    onChange? : ChangeEventHandler<HTMLInputElement> | undefined
}

export const TextInputPrimary = ( props : Interface ) => {
    return <div className = "form-group">
        <label className = "form-label">{ props.label }</label>
        <input type = { props.type }
               value = { props.value }
               className = "form-control"
               defaultValue = { props.defaultValue }
               disabled = { props.disable }
               readOnly = { props.raedOnly }
               hidden = { props.hidden }
               onChange = { props.onChange }/>
    </div>
}
