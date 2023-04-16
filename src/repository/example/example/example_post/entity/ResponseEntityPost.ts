// To parse this data:
//
//   import { Convert, ResponseEntityPost } from "./file";
//
//   const responseEntityPost = Convert.toResponseEntityPost(json);

export interface ResponseEntityPost {
    id? : number;
    title? : string;
    userId? : number;
}

// Converts JSON strings to/from your types
export class ConvertResponseEntityPost {
    public static toResponseEntityPost( json : string ) : ResponseEntityPost {
        return JSON.parse( json );
    }

    public static responseEntityPostToJson( value : ResponseEntityPost ) : string {
        return JSON.stringify( value );
    }
}
