import { ChangeEventHandler } from "react";


interface Interface {
    label : string
    rows? : number
    onChange? : ChangeEventHandler<HTMLTextAreaElement> | undefined
    defaultValue? : string
    value? : string
}

export const InputTextArea = ( props : Interface ) => {
    return <div className = "form-group">
        <label className = "form-label">{ props.label }</label>
        <textarea rows = { props.rows ?? 5 }
                  className = "form-control"
                  onChange = { props.onChange }
                  value = { props.value }
                  defaultValue = { props.defaultValue }></textarea>
    </div>
}
