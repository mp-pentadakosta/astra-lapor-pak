import { ModelSelectOption } from "@/application/component/input/model/ModelSelectOption";


interface Interface {
    label : string
    value : ModelSelectOption[]
    selected? : ( data : ModelSelectOption | undefined ) => void
}

export const InputSelectOption = ( props : Interface ) => {

    return <div className = "form-group">
        <label htmlFor = "example-select" className = "form-label">{ props.label }</label>
        <select className = "form-select"
                id = "example-select"
                onChange = { ( e ) => {
                    const data = props.value.find( ( item ) => item.value === e.target.value );
                    props.selected && props.selected( data );
                } }>
            {
                props.value.map( ( item, index ) => {
                    return <option key = { index }
                                   value = { item.value }
                                   selected = { item.selected }>
                        { item.key }
                    </option>
                } )
            }
        </select>
    </div>
}
