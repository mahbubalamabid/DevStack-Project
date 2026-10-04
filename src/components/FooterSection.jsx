// import React from "react";

// const FooterSection = () => {
//   return (
//     <>
//       <footer className="flex justify-between gap-10 container mx-auto mt-[92px] items-center">
//         {/* Left-Part */}
//         <div >
//           <img src="/src/assets/logo-text.png" alt=""/>
//           <p>
//             Curated tools, technologies, and resources for developers building
//             modern software.
//           </p>
//           <div className="flex gap-10">
//             <span>GitHub</span>
//             <span>Twitter</span>
//             <span>Linkedin</span>
//           </div>
//           <div className="mt-[89px]">
//             <p>© 2026 Dev Stack. All rights reserved.</p>
//           </div>
//         </div>

//         {/* Middle-Part-1 */}
//         <div>
//             <h5>PRODUCT</h5>
//             <ul>
//                 <li>Home</li>
//                 <li>Technologies</li>
//                 <li>Projects</li>
//             </ul>
//         </div>
//         {/* Middle-Part-2 */}
//         <div>
//             <h5>COMPANY</h5>
//             <ul>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Careers</li>
//             </ul>
//         </div>
//         {/* Middle-Part-3 */}
//         <div>
//             <h5>LEGAL</h5>
//             <ul>
//                 <li>Privacy Policy</li>
//                 <li>Terms of Service</li>
//             </ul>
//         </div>

//       </footer>
//     </>
//   );
// };

// export default FooterSection;

import React from "react";

const FooterSection = () => {
  return (
    <footer className="container mx-auto mt-[92px]">
      {/* Top Footer */}
      <div className="border-t border-[#E5E7EB] pt-[40px] pb-[70px]">
        <div className="grid grid-cols-5 gap-10">
          {/* Left Part */}
          <div className="col-span-2">
            <img
              src="/src/assets/logo-text.png"
              alt="Dev Stack"
              className="w-[95px]"
            />

            <p className="text-[11px] text-[#64748B] max-w-[300px] mt-3">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-5 mt-4">
              <a
                href="#"
                className="text-[12px] text-[#334155] hover:text-[#E11D8D]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] text-[#334155] hover:text-[#E11D8D]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[12px] text-[#334155] hover:text-[#E11D8D]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-[13px] font-bold text-[#0F172A] uppercase">
              PRODUCT
            </h5>

            <ul className="flex flex-col gap-2 mt-3">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[13px] font-bold text-[#0F172A] uppercase">
              COMPANY
            </h5>

            <ul className="flex flex-col gap-2 mt-3">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-[13px] font-bold text-[#0F172A] uppercase">
              LEGAL
            </h5>

            <ul className="flex flex-col gap-2 mt-3">
              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[13px] text-[#64748B] hover:text-[#E11D8D]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#E5E7EB] py-5 flex items-center justify-between">
        <p className="text-[11px] text-[#94A3B8]">
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="#"
            className="text-[11px] text-[#94A3B8] hover:text-[#E11D8D]"
          >
            Privacy
          </a>

          <a
            href="#"
            className="text-[11px] text-[#94A3B8] hover:text-[#E11D8D]"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
