class FormatCurrency {
    public numberToReal( value : number ) : string {
        return value.toLocaleString( 'id-ID', {
            style : 'currency',
            currency : 'IDR',
        } );
    }
}

export default new FormatCurrency();
