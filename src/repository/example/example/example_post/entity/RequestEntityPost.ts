// To parse this data:
//
//   import { Convert, RequestEntityPost } from "./file";
//
//   const requestEntityPost = Convert.toRequestEntityPost(json);

export interface RequestEntityPost {
    title? : string;
    userId? : number;
}

// Converts JSON strings to/from your types
export class ConvertRequestEntityPost {
    public static toRequestEntityPost( json : string ) : RequestEntityPost {
        return JSON.parse( json );
    }

    public static requestEntityPostToJson( value : RequestEntityPost ) : string {
        return JSON.stringify( value );
    }
}
