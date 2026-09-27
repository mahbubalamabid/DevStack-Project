import React from "react";

export const heroSection = () => {
  return (
    <>
      <section className="flex justify-between items-center container mx-auto mt-[96px]">
        <div>
          <div>
            <p className="mb-7">
              <span className="text-[#0F172A] text-6xl font-bold">Build Your Ideal</span> <br />
              <span className="text-6xl font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
            </p>
            <p className="text-[#475569] w-[571px] mb-7 text-[18px]">
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
          <img className="w-[460px] h-auto" src="/src/assets/banner-stack.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default heroSection;
