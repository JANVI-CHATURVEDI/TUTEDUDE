import Navbar from "../components/Navbar";
import OfferSlider from "../components/OfferSlider";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import SupplierCard from "../components/SupplierCard";

const Home = () => {
  return (
    <div className="bg-[#c0a7e5] min-h-screen">
      <Navbar />
      <OfferSlider />
      <SearchBar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 mr-4">Top Products</h2>
        <ProductCard />
      </div>

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 mr-4">Top Suppliers</h2>
        <SupplierCard />
      </div>
    </div>
  );
};

export default Home;                  