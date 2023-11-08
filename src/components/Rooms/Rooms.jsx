import { useLoaderData } from "react-router-dom";

const Rooms = () => {
    const rooms = useLoaderData()

    return (
        <div className="max-w-6xl mx-auto">
            <h2>this is rooms page</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    rooms.map(room => <div key={room._id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="h-44 rounded-xl" src={room.image} alt="room" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{room.name}</h2>
                                <p>{room.description}</p>
                                <p className="text-lg">Price per night: ${room.price}</p>
                                {/* <button className="btn btn-primary">Book Now</button> */}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Rooms;