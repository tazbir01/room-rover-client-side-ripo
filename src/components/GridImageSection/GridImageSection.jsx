import { useLoaderData } from "react-router-dom";

const GridImageSection = () => {
    const rooms = useLoaderData()
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-4 my-5">
            {
                rooms.map(room => <div className="" key={room._id}>
                    <div>
                        <img className="h-60 w-full" src={room.image} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default GridImageSection;