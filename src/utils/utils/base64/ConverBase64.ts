class ConvertBase64 {
    public convertFileToBase64( file : File ) : Promise<string | null> | null {
        const data = new Promise( ( resolve, reject ) => {
            const reader = new FileReader()
            reader.readAsDataURL( file )
            reader.onload = () => resolve( reader.result as string )
            reader.onerror = ( error ) => reject( error )
        } )
        data.then( ( result ) => {
            return result
        } ).catch( ( error ) => {
            return null
        } )
        return null
    }
}

export default new ConvertBase64()
