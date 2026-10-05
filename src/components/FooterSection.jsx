import React from "react";

const FooterSection = () => {
  return (
    <footer className="container mx-auto mt-[60px] lg:mt-[92px] px-5 lg:px-0">

      <div className="border-t border-[#E5E7EB] pt-[35px] pb-[50px] lg:pt-[40px] lg:pb-[70px]">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2 text-center lg:text-left">
            <img
              src="/src/assets/logo-text.png"
              alt="Dev Stack"
              className="w-[95px] mx-auto lg:mx-0"
            />

            <p className="text-[12px] lg:text-[11px] text-[#64748B] max-w-[300px] mx-auto lg:mx-0 mt-3 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex justify-center lg:justify-start gap-5 mt-4">
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

          <div className="hidden lg:block">
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

          <div className="hidden lg:block">
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

          <div className="hidden lg:block">
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

      <div className="border-t border-[#E5E7EB] py-5 flex flex-col lg:flex-row items-center justify-between gap-3">

        <p className="text-[11px] text-[#94A3B8] text-center lg:text-left">
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