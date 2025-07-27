import { FaStar } from "react-icons/fa";

const suppliers = [
  {
    name: "FreshKart Distributors",
    avatar: "https://i.pravatar.cc/100?img=11",
    rating: 4.7,
    category: "Fruits & Seasonal",
    city: "Lucknow",
    products: 120,
    delivery: "Within 24 hrs"
  },
  {
    name: "Veggie World",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 4.5,
    category: "Leafy & Root Veggies",
    city: "Kanpur",
    products: 98,
    delivery: "Same Day"
  },
  {
    name: "GreenHarvest Organic",
    avatar: "https://i.pravatar.cc/100?img=13",
    rating: 4.6,
    category: "Organic Staples",
    city: "Delhi",
    products: 140,
    delivery: "Next Day"
  },
  {
    name: "Daily Dairy Co.",
    avatar: "https://i.pravatar.cc/100?img=15",
    rating: 4.9,
    category: "Dairy & Eggs",
    city: "Noida",
    products: 60,
    delivery: "Every Morning"
  },
  {
    name: "MeatMaster",
    avatar: "https://i.pravatar.cc/100?img=17",
    rating: 4.4,
    category: "Fresh Meat",
    city: "Gurgaon",
    products: 45,
    delivery: "Cold-packed 6 hrs"
  },
  {
    name: "Baker's Basket",
    avatar: "https://i.pravatar.cc/100?img=20",
    rating: 4.8,
    category: "Bakery & Buns",
    city: "Agra",
    products: 30,
    delivery: "Early Morning"
  },
  {
    name: "Spice Villa",
    avatar: "https://i.pravatar.cc/100?img=22",
    rating: 4.6,
    category: "Spices & Masalas",
    city: "Varanasi",
    products: 75,
    delivery: "2 Days Delivery"
  },
  {
    name: "GrainHub Suppliers",
    avatar: "https://i.pravatar.cc/100?img=24",
    rating: 4.3,
    category: "Grains & Pulses",
    city: "Jaipur",
    products: 110,
    delivery: "Within 48 hrs"
  }
];

const SupplierCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-5 px-2">
      {suppliers.map((supplier, index) => (
        <div
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
            <p>🛒 {supplier.products} products</p>
            <p>🚚 {supplier.delivery}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplierCard;