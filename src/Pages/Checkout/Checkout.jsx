import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    const { title, _id,  price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = e =>{
        e.preventDefault();
        // const form = e.target;
        const name = e.target.name.value;
        const date = e.target.date.value;
        const email = user?.email;
        const message = e.target.message.value; 

        const booking ={
            customerName: name, message:message, image:img, service: title,
            email, date, service_id:_id, price:price
        }
        console.log(booking);

        fetch('http://localhost:5000/checkout',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })


    }


    return (
        <div>
            <div className="lg:ml-80 mr-80 mb-20 bg-gray-100 p-20">
                <h2 className="text-4xl text-[#FF3811] text-center font-bold mb-5">CheckOut</h2>
                <h2 className="text-center text-xl font-medium mb-4">{title}</h2>

                <form onSubmit={handleBookService}>
                    <div className="flex gap-3 mb-5">
                        <input type="text" name='Name' placeholder="Name" className="input input-bordered w-[350px]" required />


                        <input type="text" name='price' defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered w-[350px]" required />
                    </div>

                    <div className="flex gap-3 mb-5">

                        <input type="Date" name="date" placeholder="Date" className="input input-bordered w-[350px]" required />


                        <input type="email" defaultValue={user?.email} name='email' placeholder="Email" className="input input-bordered w-[350px]" required />
                    </div>
                    <div>
                        <textarea type="text" name="message" className="border lg:w-[550px] h-[200px] p-4 mb-5 rounded-lg" placeholder="Message"></textarea>
                    </div>
                    <div>
                        <button className="btn lg:w-[550px] bg-[#FF3811] text-white">Confirm Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;