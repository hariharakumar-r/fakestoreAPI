// imported hooks from react
import React, { useContext, useEffect, useState } from "react";
// imported sidebar context
import { SidebarContext } from "../Context/SidebarContext";
// imported bag icon
import { BsBag } from "react-icons/bs";
// imported the cart context 
import { CartContext } from "../Context/CartContext";
// link is imported from router dom
import { Link } from "react-router-dom";
import logo1 from "../img/logo1.png";

// header is a variable
const Header = () => {
  // header state if false means.. it tells to use the state of setIsActive
  const [isActive, setIsActive] = useState(false);
// if header isOpen then use the context as sidebar context
  const { isOpen, setIsOpen } = useContext(SidebarContext);
// if itemamout in present the use the cart context option hence the item is present
  const { itemAmount } = useContext(CartContext);

  // event listener to scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if scrolled below 60px then setisactive of usestate is true
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
// it returns the given html like jsx form
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed  w-full z-10 transition-all `}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto ">
        <Link to={"/"}>
          <div>
            <img className="w-[40px] " src={logo1} alt="" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex cursor-pointer"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -botton-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
