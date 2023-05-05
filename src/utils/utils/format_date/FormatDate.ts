class FormatDate {
    public dateToString( date : Date ) : string {
        return `${ date }` //`${ year }-${ month }-${ day }`;
    }

    public stringDateToStringLocale( date : string ) : string {
        const dateLocale = new Date( date );
        return dateLocale.toLocaleDateString();
    }

    public reverseStringDate( date : string ) : string {
        return date.split( '-' ).reverse().join( '-' );
        // return `${ splitDate[ 2 ] }-${ splitDate[ 1 ] }-${ splitDate[ 0 ] }`;
    }

    public dateStringToSend( date : string ) : string {
        const dateLocale = new Date( date );
        const year = dateLocale.getFullYear();
        const month = dateLocale.getMonth() + 1;
        const day = dateLocale.getDate();
        const monthString = month < 10 ? `0${ month }` : `${ month }`;
        return `${ year }-${ monthString }-${ day }`;
    }
}

export default new FormatDate();
