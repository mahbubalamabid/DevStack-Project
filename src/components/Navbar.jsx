import React, { useState } from "react";
import logoText from "../assets/logo-text.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav>

        <div className="container mx-auto flex items-center justify-between mt-4 lg:mt-8 px-4">

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-xl text-[#475569]"
            >
              ☰
            </button>

            <img src={logoText} alt="Dev Stack" />
          </div>

          <ul className="hidden lg:flex justify-between items-center gap-6">
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

          <div className="flex items-center gap-2 lg:gap-4">
            <button className="text-[#475569] text-[10px] lg:text-base">
              <a href="">Sign In</a>
            </button>

            <button className="text-white text-[10px] lg:text-base border rounded-4xl px-3 py-1.5 lg:px-5 lg:py-2 bg-[#D91B7E]">
              <a href="">Sign Up</a>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-[#E5E7EB] mt-4 px-4 py-4">
            <ul className="flex flex-col gap-4">

              <li>
                <a href="" className="text-[#ff0274]">
                  Home
                </a>
              </li>

              <li>
                <a href="" className="text-[#475569]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="" className="text-[#475569]">
                  Projects
                </a>
              </li>

              <li>
                <a href="" className="text-[#475569]">
                  About
                </a>
              </li>

              <li>
                <a href="" className="text-[#475569]">
                  Contact
                </a>
              </li>

            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;