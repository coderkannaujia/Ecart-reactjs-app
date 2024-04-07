import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Items } from "./Data";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = ({ cart, setData }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = Items.filter((product) => product.category === category);
    console.log(element);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = Items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <div className="sticky top-0">
      <div className="flex justify-around  bg-slate-800 h-full w-full p-4 px-2">
        <div className="flex items-center gap-36">
          <Link to={"/"} className="text-white  font-bold text-xl">
            E-CART
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="search product"
              className="bg-white w-[400px] py-1 "
            />
          </form>
        </div>

        <span className="text-xl font-bold text-white  ">
          <Link to={"/cart"}>
            <Badge badgeContent={cart.length} color="primary">
              <BsFillCartCheckFill className="h-10 w-12" />
            </Badge>
          </Link>
        </span>

      </div>

      {location.pathname == "/" && (
        <div className="bg-dark-purple   p-4 font-semibold text-white text-md flex justify-between">
          <div>FiLter by</div>
          <div>No Filter</div>
          <div
            className="cursor-pointer"
            onClick={() => filterByCategory("mobiles")}
          >Mobiles</div>
          <div
            className="cursor-pointer"
            onClick={() => filterByCategory("laptops")}
          > Laptop</div>
           
          <div
            className="cursor-pointer"
            onClick={() => filterByCategory("tablets")}
          > Tablet </div>
           
         
          <div className="cursor-pointer" onClick={() => filterByPrice(29999)}>
            {">="}29999
          </div>
          <div className="cursor-pointer" onClick={() => filterByPrice(49999)}>
            {">="}49999
          </div>
          <div className="cursor-pointer" onClick={() => filterByPrice(69999)}>
            {">="}69999
          </div>
          <div className="cursor-pointer" onClick={() => filterByPrice(89999)}>
            {">="}89999
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
