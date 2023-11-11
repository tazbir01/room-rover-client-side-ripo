import { useLoaderData } from "react-router-dom";

const MyBookings = () => {
    const myBookings = useLoaderData()

    return (
        <div className="max-w-6xl mx-auto space-y-5">
            <h2>My bookings: {myBookings.length}</h2>
            {
                myBookings.map(book => <div key={book._id} className="flex gap-5 border rounded-lg space-y-5">
                    <img className="w-60 rounded-lg" src={book.image} alt="" />
                    <div>
                        <h4 className="text-xl font-bold">{book.name}</h4>
                        <p className="font-bold">Price: <span className="text-slate-500">${book.price}</span></p>
                        <p className="font-bold">Booking Duration: <span className="text-slate-500">{book.checkin}</span> to <span className="text-slate-500">{book.checkout}</span></p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyBookings;