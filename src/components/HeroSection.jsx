import React from "react";
import bannerStack from "../assets/banner-stack.png";


export const heroSection = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center container mx-auto mt-[50px] lg:mt-[96px] px-4">
        <div>
          <div >
            <p className="mb-7">
              <span className="text-[#0F172A] text-[34px] sm:text-[42px] lg:text-6xl font-bold">
                Build Your Ideal
              </span>
              <span className="text-[34px] sm:text-[42px] lg:text-6xl font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </p>
            <p className="text-[#475569] w-full max-w-[571px] mb-7 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              Explore frontend, backend, database, and tooling options,<br /> compare
              them side by side, and put together the stack that fits your <br /> next
              project.
            </p>
          </div>

          <div>
            <button className="btn btn-active btn-secondary mr-[12px] bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-[11px] text-[14px] w-[170px]">
              Explore Technologies
            </button>
            <button className="btn btn-active btn-secondary bg-white text-[#374151] border-[#E5E7EB] rounded-[11px] text-[14px] w-[170px]">Learn More</button>
          </div>
        </div>

        <div>
          <img src={bannerStack} alt="" />
        </div>
      </section>
    </>
  );
};

export default heroSection;
