interface Interface {
    label : string;
    isMultiple? : boolean;
}

export const InputFilePrimary = ( props : Interface ) => {
    return <div className = "form-group">
        <label htmlFor = "formFileMultiple" className = "form-label">{ props.label }</label>
        <input className = "form-control" type = { 'file' } id = "formFileMultiple" multiple = { props.isMultiple }/>
    </div>
}
