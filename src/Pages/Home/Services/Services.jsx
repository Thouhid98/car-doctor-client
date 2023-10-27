import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className="mt-5">
                <h4 className="text-center text-2xl font-bold text-[#FF3811]">Services</h4>
                <h2 className=" text-center my-3 mb-3 text-5xl font-bold">Our Service Area</h2>
                <p className="lg:w-[700px] font-normal text-center lg:ml-[320px]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid lg:grid-cols-3 my-8 p-12 ml-2">
                {
                    services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;