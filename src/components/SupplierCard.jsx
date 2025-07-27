import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { suppliers } from "../data/suppliers";

const SupplierCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6 px-4">
      {suppliers.map((supplier, index) => (
        <Link
          to={`/vensupplier-profile/${index}`}
          key={index}
          className="bg-[#9b83e3] text-[#302f2f] p-5 rounded-2xl shadow-md hover:shadow-xl w-72 transition-transform transform hover:-translate-y-1"
        >
          <img
            src={supplier.avatar}
            alt={supplier.name}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
          <h3 className="text-center font-bold text-xl mt-3">{supplier.name}</h3>
          <p className="text-center text-[#000000]">{supplier.category}</p>

          <div className="flex justify-center items-center mt-2 gap-1">
            {Array.from({ length: Math.floor(supplier.rating) }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
            <span className="text-sm text-[#141313]">({supplier.rating})</span>
          </div>

          <div className="text-xs text-center mt-3 text-[#000000] space-y-1">
            <p>📍 {supplier.city}</p>
            <p>🛒 {supplier.products}</p>
            <p>🚚 {supplier.delivery}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SupplierCard;
