export interface ResponseExampleEntity {
    posts : Post[];
    total : number;
    skip : number;
    limit : number;
}

export interface Post {
    id : number;
    title : string;
    body : string;
    userId : number;
    tags : string[];
    reactions : number;
}

// Converts JSON strings to/from your types
export class ConvertResponseExampleEntity {
    public static toResponseExamplePostEntity( json : string ) : ResponseExampleEntity {
        return JSON.parse( json );
    }

    public static responseExamplePostEntityToJson( value : ResponseExampleEntity ) : string {
        return JSON.stringify( value );
    }
}
