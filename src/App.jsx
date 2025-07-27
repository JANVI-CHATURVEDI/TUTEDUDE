import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage";
import { products } from "./data/products";
import VendorProfile from "./pages/VendorProfile";
import TrackOrder from "./pages/TrackOrder";
import Wallet from "./pages/Wallet";
import VenSupplierProfile from './pages/VenSupplierProfile';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SearchAllProducts from "./pages/SearchAllProducts";
import SupplierDashboard from "./pages/SupplierDashboard";
import SupplierOrders from "./pages/SupplierOrders";
import MyProducts from "./pages/MyProducts";
import UploadCertificate from "./pages/UploadCertificate";
import SupplierProfile from "./pages/SupplierProfile";
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/vendor/home" element={<Home />} />
      <Route path="/product/:id" element={<SingleProductPageWrapper />} />
      <Route path="/vendor-profile" element={<VendorProfile />} />
      <Route path="/vendor/track" element={<TrackOrder />} />
      <Route path="/vendor/wallet" element={<Wallet />} />
      <Route path="/vendor/cart" element={<Cart />} />


      

      <Route path="/search" element={<SearchAllProducts />} />

      {/* Supplier Routes */}
      <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
      <Route path="/supplier/orders" element={<SupplierOrders />} />
      <Route path="/supplier/products" element={<MyProducts />} />
      <Route path="/vensupplier-profile/:id" element={<VenSupplierProfile />} />

      <Route path="/supplier/upload-certificate" element={<UploadCertificate />} />
      <Route path="/supplier/profile" element={<SupplierProfile />} />

      {/* Logout just redirects to login for now */}
      <Route path="/logout" element={<Login />} />

    </Routes>
  );
}

// This wrapper reads the ID from URL and finds the product
function SingleProductPageWrapper() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div className="text-center mt-10 text-red-500">Product not found</div>;

  return <SingleProductPage product={product} />;
}

export default App;
