import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  fixed top-0 w-full h-full bg-white shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({itemAmount})
        </div>
        <div
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col py-4 mt-4 gap-y-3 ">
        <div className="flex items-center justify-between w-full ">
          {/* total */}

          <div className="font-semibold uppercase">
            <span className="mr-2 ">Total with 10% discount:</span>${" "}
            {parseFloat(total-(1%total)).toFixed(2)}
          </div>
          {/* clear cart */}
          <div
            onClick={() => clearCart()}
            className="flex items-center rounded-xl justify-center w-12 h-12 py-4 text-xl text-white bg-red-500 cursor-pointer "
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="flex items-center justify-center w-28 rounded-2xl p-4  font-medium bg-gray-200 text-primary"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center w-28 p-4 rounded-2xl font-medium text-white bg-primary"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
