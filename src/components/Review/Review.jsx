import moment from "moment";

const Review = ({ review, id }) => {
    const { rating, comment, userName, timestamp, roomId } = review;

    const momentDate = moment(timestamp)
    const formatedDate = momentDate.format('d/m/yyy h:mm:ss a')

    if(id !== roomId){
        return null;
    }

    return (
        <div className="border-t-2 mb-5">
            <p className="text-lg font-bold">{userName}</p>
            <p>{formatedDate}</p>

            <div className="my-3 rating">
                <label className="block text-sm font-medium text-gray-700">Rating:</label>
                {[1, 2, 3, 4, 5].map((value) => (
                    <input
                        key={value}
                        type="radio"
                        name="rating"
                        value={value}
                        checked={rating === value}
                        className="mask mask-star-2 bg-orange-400"
                    />
                ))}
            </div>
            {/* <p>{rating}</p> */}
            <p className="border p-2 rounded-xl bg-slate-200 w-96">{comment}</p>
        </div>
    );
};

export default Review;