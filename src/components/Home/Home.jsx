import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FeaturedRoom from "../FeaturedRoom/FeaturedRoom";
import { Helmet } from "react-helmet-async";
import Map from "../Map/Map";

const Home = () => {
    const featuredRooms = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>RoomRover | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="bg-red-600 flex justify-around items-center  text-white text-center max-w-6xl mx-auto rounded-2xl my-6">
                <div>
                    <p className="text-4xl font-bold">10% Off</p>
                    <p>for every room</p>
                </div>
                <div className="bg-white text-red-600 text-lg font-bold rounded-xl my-2 p-2">
                    <p>Find and book your perfect stay</p>
                </div>
                <div className="bg-white text-red-600 text-lg font-bold rounded-xl my-2 p-2">
                    <p>Book now and save 10%</p>
                </div>
            </div>
            <div>
                <Map></Map>
            </div>
            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-2xl font-bold mb-5">Our Featured Rooms</h2>
                <div className="grid grid-cols-4 gap-5">
                    {
                        featuredRooms.map(featuredRoom => <FeaturedRoom key={featuredRoom._id} featuredRoom={featuredRoom}></FeaturedRoom>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;