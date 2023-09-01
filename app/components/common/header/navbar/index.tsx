import React from "react";
import { SearchIcon, CartIcon } from "@/app/components/shared/icons";

const Navbar = () => {
  return (
    <div className="flex shadow pb-2 justify-between xl:pl-32 xl:pr-32 pt-4 items-center">
      <div>
        <span className="flex items-center gap-1">
          <h4 className="text-5xl font-medium capitalize text-pale-orange">
            OS
          </h4>
          <p className="text-pale-orange text-xl leading-relaxed capitalize">
            online store
          </p>
        </span>
      </div>
      <div className="w-1/2">
        <div className=" flex items-center border-2 border-pale-gray w-full rounded-lg p-1">
          <input className="border-none outline-none text-lg text-pale-black  w-full pl-2" />
          <button className="hover:bg-light-orange rounded-lg">
            <SearchIcon width="40px" height="40px" color="#FF385C" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <span className="flex items-center gap-2">
          <h4 className="text-lg text-pale-orange cursor-pointer hover:text-pale-gray">
            Login
          </h4>
          <h4 className="text-lg text-pale-orange cursor-pointer hover:text-pale-gray">
            sign up
          </h4>
        </span>
        <span className="flex items-center">
          <button>
            <CartIcon height="30px" width="30px" color="#FF385C" />
          </button>

          <p>0</p>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
