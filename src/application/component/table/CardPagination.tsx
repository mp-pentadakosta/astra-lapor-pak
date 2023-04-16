interface InterfaceCardPagination {
    title : string
    onClick? : () => void
}

export const CardPagination = ( props : InterfaceCardPagination ) => {
    return <div
        onClick = { props.onClick }
        style = { {
            height : "35px",
            width : "35px",
            backgroundColor : "#00bcd4",
            borderRadius : "10px",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            color : "white",
            fontSize : "15px",
            textAlign : "center",
            marginRight : "5px",
        } }>
        { props.title }
    </div>
}
