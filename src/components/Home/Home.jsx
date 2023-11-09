import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FeaturedRoom from "../FeaturedRoom/FeaturedRoom";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const featuredRooms = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>RoomRover | Home</title>
            </Helmet>
            <Banner></Banner>
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