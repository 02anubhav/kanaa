import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Search, Mic, User, ShoppingCart } from "lucide-react";
import { useCart } from "./../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
import useIsMobile from "../../hooks/useIsMobile";

export default function App() {
  const { totalCount } = useCart();
  const { query, setQuery } = useSearch();
  const isMobile = useIsMobile(); 
  const navigate = useNavigate();

  return (
    <Navbar>
      <Navbar.Logo>
        <img
          src="https://thekanaa.com/media/logo/stores/1/Client_logo.svg"
          alt="logo"
          className="h-4"
          onClick={() => navigate("/")}
        />
      </Navbar.Logo>

      {!isMobile && (
        <Navbar.Search>
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?..."
            className="flex-1 px-2 outline-none text-sm"
          />
          <Mic size={18} className="text-gray-700" />
        </Navbar.Search>
      )}

      <Navbar.Actions>
        <Navbar.Item>EN</Navbar.Item>
        <Navbar.Item>
          <User size={12} /> Sign In
        </Navbar.Item>
        <Navbar.Item
          onClick={() => navigate("/cart")}
          className="cursor-pointer"
        >
          <ShoppingCart size={12} />
          {totalCount > 0 && (
            <span className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full text-[8px] bg-red-500 text-white">
              {totalCount}
            </span>
          )}
        </Navbar.Item>
      </Navbar.Actions>
    </Navbar>
  );
}
