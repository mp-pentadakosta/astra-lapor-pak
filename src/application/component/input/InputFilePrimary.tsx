import { FormEventHandler, useState } from "react";


interface Interface {
    label : string;
    isMultiple? : boolean;
    onInput? : FormEventHandler<HTMLInputElement> | undefined
}

export const InputFilePrimary = ( props : Interface ) => {
    const [ base64, setBase64 ] = useState<string[]>( [] );
    return <div className = "form-group">
        <label htmlFor = "formFileMultiple" className = "form-label">{ props.label }</label>
        <input className = "form-control"
               type = { 'file' }
               id = "formFileMultiple"
               multiple = { props.isMultiple }
               onInput = { props.onInput }/>
    </div>
}
