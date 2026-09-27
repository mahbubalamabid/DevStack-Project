import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container mx-auto grid grid-cols-3 items-center mt-8">
          <div>
            <img src="/src/assets/logo-text.png" alt="" />
          </div>

          <ul className="flex justify-between items-center">
            <a href="">
              <li>
                <span className="text-[#ff0274]">Home</span>
              </li>
            </a>
            <a href="">
              <li>
                <span className="text-[#475569]">Technologies</span>
              </li>
            </a>
            <a href="">
              <li>
                <span className="text-[#475569]">Projects</span>
              </li>
            </a>
            <a href="">
              <li>
                <span className="text-[#475569]">About</span>
              </li>
            </a>
            <a href="">
              <li>
                <span className="text-[#475569]">Contact</span>
              </li>
            </a>
          </ul>

          <div className="flex items-center justify-end gap-4">
            <button className="text-[#475569]">
              <a href="">Sign In</a>
            </button>
            <button className="text-white border-1 rounded-4xl pl-5 pr-5 pt-2 pb-2 bg-[#D91B7E]">
              <a href="">Sign Up</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
