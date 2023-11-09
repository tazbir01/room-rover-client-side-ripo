import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
    const {name, image, description, price } = useLoaderData()

    const discountPrice = price * 10/100
    const newPrice = price - discountPrice

    return (
        <div className="max-w-6xl mx-auto mt-14">
            <Helmet>
                <title>Room details</title>
            </Helmet>
            <div className="grid grid-cols-5">
                <div className=" col-span-3 space-y-3 ">
                    <img className="rounded-xl" src={image} alt="" />
                    {/* review section */}
                    <div>
                        <h4 className="text-xl font-bold">Customars review: </h4>
                    </div>
                </div>
                <div className=" col-span-2 p-5 ml-3 space-y-3 shadow-lg bg-base-300 rounded-xl">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <p><span className="font-bold">Rating:</span> </p>
                    <p><span className="font-bold">Price per night:</span> <span className=" text-xl font-bold text-slate-600">${newPrice}</span> <del>${price}</del> <span className="bg-red-600 text-white rounded-lg p-1">10% Off</span></p>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <input className="border p-1 block" type="date" name="" id="" />
                    <button className="btn btn-primary">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;