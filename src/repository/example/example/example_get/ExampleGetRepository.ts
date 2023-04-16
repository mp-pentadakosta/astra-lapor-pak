import Api from "@/core/api/api";
import {
    ConvertResponseExampleEntity, ResponseExampleEntity,
} from "@/repository/example/example/example_get/entity/ResponseExampleEntity";


class ExampleGetRepository {
    public exampleGet = async () : Promise<ResponseExampleEntity | null> => {
        const resp = await Api.get( '/posts' );
        if ( resp !== null ) {
            return ConvertResponseExampleEntity.toResponseExamplePostEntity( resp );
        }
        return null;
    }
}

export default new ExampleGetRepository();
