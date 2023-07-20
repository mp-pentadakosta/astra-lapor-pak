interface InterfaceButtonPrimary {
    label: string
    data?: "button" | "submit" | "reset" | undefined
    type?: "btn-primary" | "btn-secondary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info" | "btn-light" | "btn-dark" | "btn-link"
    onClick?: () => void
    full?: boolean
}

export const ButtonPrimary = (props: InterfaceButtonPrimary) => {
    return <div className="clearfix col-12">
        <button type={`${props.data ?? 'button'}`}
                onClick={props.onClick}
                className={`waves-effect ${props.full ? "col-12" : ""} waves-light btn ${props.type ?? 'btn-primary'} mb-5`}>{props.label}</button>
    </div>
}
