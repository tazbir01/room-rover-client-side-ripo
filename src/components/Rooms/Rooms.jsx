import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const Rooms = () => {
    const rooms = useLoaderData()

    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title>RoomRover | Rooms</title>
            </Helmet>
            <div className="grid grid-cols-4 gap-5 my-8">
                {
                    rooms.map(room => <div key={room._id}>
                        <Link to={`/roomdetails/${room._id}`}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className="h-44 rounded-xl" src={room.image} alt="room" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{room.name}</h2>
                                    <p>{room.description}</p>
                                    <p className="text-lg">Price per night: ${room.price}</p>
                                    {/* <button className="btn btn-primary">Book Now</button> */}
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Rooms;