import React from "react";

const Navbar = () => {
  return (
    <div className="navbar h-8 w-full ml-3 sticky top-0">
      <ul className="flex list-none">
        <li>
          <div className="logo"></div>
        </li>
        <li className="pt-1">
          <a href="">Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
