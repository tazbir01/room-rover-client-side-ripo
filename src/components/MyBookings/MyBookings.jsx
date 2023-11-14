import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const MyBookings = () => {
    const myBookings = useLoaderData()
    const [bookings, setBookings] = useState(myBookings)
    const [errorMessage, setErrorMessage] = useState('')


    const handleUpdateButton = (e, id) => {

        e.preventDefault()
        const checkin = e.target.updateCheckin.value;
        const checkout = e.target.updateCheckout.value;
        const updateInfo = { checkin, checkout }
        console.log(checkin, checkout, id)

        setErrorMessage('')

        if (checkin > checkout) {
            return setErrorMessage('Invalide date')
        } else if (!checkin || !checkout) {
            return setErrorMessage('Please choose your date')
        }

        fetch(`https://room-rover-server.vercel.app/mybookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    swal("","Updated","success")
                }
            })
    }



    const handleCancelButton = id => {
        swal({
            title: "Are you sure?",
            text: "Are you sure to cancel your booking?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://room-rover-server.vercel.app/mybookings/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                swal("Your booking has been canceled", {
                                    icon: "success",
                                });
                                const remaining = bookings.filter(booking => booking._id !== id)
                                setBookings(remaining)
                            }
                        })
                }
            });
    }

    return (
        <div className="max-w-4xl mx-auto space-y-5">
            <Helmet>
                <title>My Bookings</title>
            </Helmet>
            <h2 className="text-2xl font-semibold">My bookings: {bookings.length}</h2>
            {
                bookings.map(book => <div key={book._id} className="md:flex gap-5 border rounded-lg space-y-5">
                    <img className="md:w-60 rounded-lg" src={book.image} alt="" />
                    <div className="space-y-1 p-2">
                        <h4 className="text-xl font-bold">{book.name}</h4>
                        <p className="font-bold">Price: <span className="text-slate-500">${book.price}</span></p>
                        <p className="font-bold">Booking Duration: <span className="text-slate-500">{book.checkin}</span> to <span className="text-slate-500">{book.checkout}</span></p>
                        {/* <button onClick={() => handleUpdateButton(book)} className="btn btn-outline btn-info mr-4">Update date</button> */}
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn btn-outline btn-info mr-4">Update date</button>

                        {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-1/3 max-w-5xl">
                                <form onSubmit={(e) => handleUpdateButton(e, book._id)} className="space-y-2">
                                    <div className="flex items-center">
                                        <label>
                                            <span>Check in: </span>
                                        </label>
                                        <input className="border p-1 block" defaultValue={book.checkin} type="date" name="updateCheckin" id="" />
                                    </div>
                                    <div className="flex items-center">
                                        <label>
                                            <span>Check out: </span>
                                        </label>
                                        <input className="border p-1 block" defaultValue={book.checkout} type="date" name="updateCheckout" id="" />
                                    </div>
                                    {
                                        errorMessage && <p className="text-red-600">*{errorMessage}</p>
                                    }
                                    <button className="btn btn-primary mr-4">Update now</button>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <button onClick={() => handleCancelButton(book._id)} className="btn btn-primary">Cancel</button>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyBookings;