import Api from "@/core/api/api";


class RatingRepository {
    public giveRating = async (rating: number) => {
        const resp = await Api.post('/rating', {
            rating: rating,
        });
        if (resp !== null) {
            return resp;
        }
        return null;
    }
}

export default new RatingRepository();
