import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { authContext } from "../Provider/AuthProvider";

const RoomDetails = () => {
    const { name, image, description, price } = useLoaderData()
    const [errorMessage, setErrorMessage] = useState('')
    const { user } = useContext(authContext)

    const discountPrice = price * 10 / 100
    const newPrice = price - discountPrice

    const handleBookNow = e => {
        e.preventDefault()
        const checkin = e.target.checkin.value
        const checkout = e.target.checkout.value
        console.log(checkin, checkout)
        const addToMyRoom = { name, image, price, checkin, checkout }

        setErrorMessage('')

        if (checkin >= checkout) {
            return setErrorMessage('Invalide date')
        } else if (!checkin || !checkout) {
            return setErrorMessage('Please choose your date')
        }

        const url = 'http://localhost:5000/mybookings'

        if (user) {
            swal({
                title: "Summery",
                text: `Total Price: $${newPrice}
    
                       Duration: ${checkin} to ${checkout}
                `,
                icon: "",
            })
                .then((willBooking) => {
                    if (willBooking) {
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(addToMyRoom)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    swal("You have successfully booked", {
                                        icon: "success",
                                    });
                                }
                            })
                    }
                });
        } else {
            // return <Navigate to="/login"></Navigate>
            // history.push("/login")
            window.location.href = '/login'
        }
    }

    const handleReviewFrom = e =>{
        e.preventDefault()
        const rating = e.target.rating.value
        const comment = e.target.comment.value
        console.log(rating,comment)
    }

    return (
        <div className="max-w-6xl mx-auto mt-14">
            <Helmet>
                <title>Room details</title>
            </Helmet>
            <div className="grid grid-cols-5">
                <div className=" col-span-3 space-y-3 ">
                    <img className="rounded-xl" src={image} alt="" />
                    {/* review section */}
                    <div className="space-y-3">
                        <h4 className="text-xl font-bold">Customars review: </h4>
                        <form onSubmit={handleReviewFrom}>
                            <div className="rating my-3">
                                <p>Rating: </p>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                                <textarea className="textarea textarea-bordered" name="comment" id="" cols="60" rows="3"></textarea>
                            </div>
                            <div>
                                <button className="btn btn-primary">Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className=" col-span-2 p-5 ml-3 space-y-3 shadow-lg bg-base-300 rounded-xl">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <p><span className="font-bold">Rating:</span> </p>
                    <p><span className="font-bold">Price per night:</span> <span className=" text-xl font-bold text-slate-600">${newPrice}</span> <del>${price}</del> <span className="bg-red-600 text-white rounded-lg p-1">10% Off</span></p>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <form onSubmit={handleBookNow}>
                        <div className="flex items-center mb-2">
                            <label>
                                <span>Check in: </span>
                            </label>
                            <input className="border p-1 block" type="date" name="checkin" id="" />
                        </div>
                        <div className="flex items-center">
                            <label>
                                <span>Check out: </span>
                            </label>
                            <input className="border p-1 block" type="date" name="checkout" id="" />
                        </div>
                        {
                            errorMessage && <p className="text-red-600">*{errorMessage}</p>
                        }
                        <button className="btn btn-primary">Book now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;