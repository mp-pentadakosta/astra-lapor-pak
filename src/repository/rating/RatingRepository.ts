import Api from "@/core/api/api";


class RatingRepository {
    public giveRating = async (id:number,rating: number) => {
        const resp = await Api.post(`/user/pengajuan/${id}/rating`, {
            rating: rating,
        });
        if (resp !== null) {
            return resp;
        }
        return null;
    }
}

export default new RatingRepository();
