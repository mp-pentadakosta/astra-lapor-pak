import Api from "@/core/api/api";
import {
    RequestEntityPost
} from "@/repository/example/example/example_post/entity/RequestEntityPost";
import {
    ConvertResponseEntityPost,
    ResponseEntityPost
} from "@/repository/example/example/example_post/entity/ResponseEntityPost";


class ExamplePostRepository {

    public examplePost = async ( request : RequestEntityPost ) : Promise<ResponseEntityPost | null> => {
        const resp = await Api.post( '/posts/add', {
            title : request.title,
            userId : request.userId
        } );
        if ( resp !== null ) {
            return ConvertResponseEntityPost.toResponseEntityPost( resp );
            // return null;
        }
        return null;
    }
}

export default new ExamplePostRepository();
