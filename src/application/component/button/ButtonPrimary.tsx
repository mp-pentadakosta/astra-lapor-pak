interface InterfaceButtonPrimary {
    label : string
}

export const ButtonPrimary = ( props : InterfaceButtonPrimary ) => {
    return <div className = "clearfix">
        <button type = "button"
                className = "waves-effect waves-light btn btn-primary mb-5">{ props.label }</button>
    </div>
}
