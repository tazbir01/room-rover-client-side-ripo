
const FeaturedRoom = ({ featuredRoom }) => {
    const { name, image, description, price } = featuredRoom;

    const discountPrice = price * 10 / 100
    const newPrice = price - discountPrice

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-44 rounded-xl" src={image} alt="room" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className="text-lg">Price per night: <span className=" text-xl font-bold text-slate-600">${newPrice}</span> <del>${price}</del> <span className="bg-red-600 text-white rounded-lg p-1">10% Off</span></p>
                <button className="btn btn-primary">Book Now</button>
            </div>
        </div>
    );
};

export default FeaturedRoom;