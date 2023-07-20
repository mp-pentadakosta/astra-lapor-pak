import {ChangeEventHandler} from "react";


interface Interface {
    label: string
    rows?: number
    onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined
    defaultValue?: string
    value?: string
    isError?: boolean
    messageError?: string
    id?: string
    data?: any
}

export const InputTextArea = (props: Interface) => {
    return <div className="form-group">
        <label className="form-label">{props.label}</label>
        <textarea rows={props.rows ?? 5}
                  id={props.id}
                  {
                      ...props.data
                  }
                  className={`form-control ${props.isError ? 'is-invalid' : ''}`}
                  onChange={props.onChange}
                  value={props.value}
                  defaultValue={props.defaultValue}></textarea>
        <div className="invalid-feedback">{props.messageError}</div>
    </div>
}
