interface InterfaceRatingFormat {
    background : string;
    color : string;
}

class RatingFormat {
    public colorStatusRating = ( status : string ) : InterfaceRatingFormat => {
        return {
            background : status === "Very Good" ? "#8bc34a" :
                status === "Very Poor" ? "#f44336" :
                    status === "Good" ? "#00bcd4" :
                        status === "Poor" ? "#ff5722" :
                            "transparent",
            color : status === "Very Good" ? "white" :
                status === "Very Poor" ? "white" :
                    status === "Good" ? "black" :
                        status === "Poor" ? "white" :
                            "black"
        };
    }
}

export default new RatingFormat();
