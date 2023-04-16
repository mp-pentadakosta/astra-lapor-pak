interface Interface {
    label : string
    rows? : number
}

export const InputTextArea = ( props : Interface ) => {
    return <div className = "form-group">
        <label className = "form-label">{ props.label }</label>
        <textarea rows = { props.rows ?? 5 }
                  className = "form-control"></textarea>
    </div>
}
