import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, _id, price, title } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
      <figure><img className="h-[270px]" src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-red-500 text-base font-medium">Price: ${price} </p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-[#FF3811] text-white">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;