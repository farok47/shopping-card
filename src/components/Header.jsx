import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              react redux shopping card
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          <Link to={"card"}>
            <li className="cursor-pointer list-none">Card</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
