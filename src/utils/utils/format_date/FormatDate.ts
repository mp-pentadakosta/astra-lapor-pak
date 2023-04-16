class FormatDate {
    public dateToString( date : Date ) : string {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${ date } a` //`${ year }-${ month }-${ day }`;
    }

    public stringDateToStringLocale( date : string ) : string {
        const dateLocale = new Date( date );
        return dateLocale.toLocaleDateString();
    }
}

export default new FormatDate();
