import {ModelSelectOption} from "@/application/component/input/model/ModelSelectOption";


interface Interface {
    label: string
    value: ModelSelectOption[]
    selected?: (data: ModelSelectOption | undefined) => void
    data?: any
    messageError?: string
    isError?: boolean
    id?: string
}

export const InputSelectOption = (props: Interface) => {

    return <div className="form-group">
        <label htmlFor={props.id} className="form-label">{props.label}</label>
        <select className={`form-select ${props.isError ? "is-invalid" : ""}`}
                id={props.id}
                {...props.data}
                onChange={(e) => {
                    const data = props.value.find((item) => item.value === e.target.value);
                    props.selected && props.selected(data);
                }}>
            {
                props.value.map((item, index) => {
                    return <option key={index}
                                   value={item.value}
                                   selected={item.selected}>
                        {item.title}
                    </option>
                })
            }
        </select>
        <div className="invalid-feedback">{props.messageError}</div>
    </div>
}
