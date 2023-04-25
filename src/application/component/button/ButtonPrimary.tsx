interface InterfaceButtonPrimary {
    label: string
    data?: "button" | "submit" | "reset" | undefined
    type?: "btn-primary" | "btn-secondary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info" | "btn-light" | "btn-dark" | "btn-link"
    onClick?: () => void
}

export const ButtonPrimary = (props: InterfaceButtonPrimary) => {
    return <div className="clearfix">
        <button type={`${props.data ?? 'button'}`}
                onClick={props.onClick}
                className={`waves-effect waves-light btn ${props.type ?? 'btn-primary'} mb-5`}>{props.label}</button>
    </div>
}
