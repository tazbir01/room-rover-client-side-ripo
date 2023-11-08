
const FeaturedRoom = ({ featuredRoom }) => {
    const { name, image, description, price } = featuredRoom;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-44 rounded-xl" src={image} alt="room" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className="text-lg">Price per night: ${price}</p>
                <button className="btn btn-primary">Book Now</button>
            </div>
        </div>
    );
};

export default FeaturedRoom;