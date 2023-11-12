import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const MyBookings = () => {
    const myBookings = useLoaderData()
    const [bookings, setBookings] = useState(myBookings)

    const handleUpdateButton = () =>{

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
                    fetch(`http://localhost:5000/mybookings/${id}`, {
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
                bookings.map(book => <div key={book._id} className="flex gap-5 border rounded-lg space-y-5">
                    <img className="w-60 rounded-lg" src={book.image} alt="" />
                    <div className="space-y-1 p-2">
                        <h4 className="text-xl font-bold">{book.name}</h4>
                        <p className="font-bold">Price: <span className="text-slate-500">${book.price}</span></p>
                        <p className="font-bold">Booking Duration: <span className="text-slate-500">{book.checkin}</span> to <span className="text-slate-500">{book.checkout}</span></p>
                        <button onClick={() => handleUpdateButton(book._id)} className="btn btn-outline btn-info mr-4">Update date</button>
                        <button onClick={() => handleCancelButton(book._id)} className="btn btn-primary">Cancel</button>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyBookings;