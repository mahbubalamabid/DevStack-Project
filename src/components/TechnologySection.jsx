import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState([]);
  const [Selectedtechnologies, setSelectedTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToStack = (technology) => {
    const alreadySelected = Selectedtechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadySelected) {
      toast.warning("Already added!");
      return;
    }

    setSelectedTechnologies([...Selectedtechnologies, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id) => {
    const Remainingtechnologies = Selectedtechnologies.filter(
      (technology) => technology.id !== id,
    );

    setSelectedTechnologies(Remainingtechnologies);

    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.error("All technologies removed!");
  };

  return (
    <>
      <section className="container mx-auto mt-[80px]">
        <p className="text-[36px] font-bold text-[#0F172A]">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#f03592] via-[#d81b7de3] to-[#7a53d4d8] bg-clip-text text-transparent">
            Technologies
          </span>
        </p>

        <p className="text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-3 grid grid-cols-3 gap-9 w-[1120px]">
            {loading ? (
              <div className="col-span-3 flex items-center justify-center h-[300px]">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-4 border-[#E2E8F0] border-t-[#0F172A] rounded-full animate-spin"></div>

                  <p className="text-[12px] text-[#64748B]">
                    Loading technologies...
                  </p>
                </div>
              </div>
            ) : (
              technologies.map((technology) => {
                return (
                  <div
                    key={technology.id}
                    className="border border-[#E5E7EB] rounded-[12px] p-4"
                  >
                    <div className="flex items-start justify-between">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-7 h-7 object-contain"
                      />

                      <span
                        className={`text-[9px] px-2 py-1 rounded-full ${
                          technology.badge === "Popular"
                            ? "bg-[#EFF6FF] text-[#0EA5E9]"
                            : technology.badge === "Versatile"
                              ? "bg-[#ECFDF5] text-[#10B981]"
                              : technology.badge === "Fast"
                                ? "bg-[#FFF7ED] text-[#F97316]"
                                : technology.badge === "Standard"
                                  ? "bg-[#ECFDF5] text-[#10B981]"
                                  : technology.badge === "Top SQL"
                                    ? "bg-[#EFF6FF] text-[#2563EB]"
                                    : technology.badge === "Cache"
                                      ? "bg-[#FEF2F2] text-[#EF4444]"
                                      : technology.badge === "Ubiquitous"
                                        ? "bg-[#FFFBEB] text-[#F59E0B]"
                                        : technology.badge === "Essential"
                                          ? "bg-[#EFF6FF] text-[#0EA5E9]"
                                          : technology.badge === "Robust"
                                            ? "bg-[#EFF6FF] text-[#0284C7]"
                                            : technology.badge === "Modern"
                                              ? "bg-[#ECFEFF] text-[#06B6D4]"
                                              : technology.badge ===
                                                  "Utility-First"
                                                ? "bg-[#F0FDFA] text-[#0D9488]"
                                                : technology.badge === "Minimal"
                                                  ? "bg-[#F5F3FF] text-[#7C3AED]"
                                                  : technology.badge === "NoSQL"
                                                    ? "bg-[#F0FDF4] text-[#16A34A]"
                                                    : technology.badge ===
                                                        "Containers"
                                                      ? "bg-[#EEF2FF] text-[#6366F1]"
                                                      : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                      >
                        {technology.badge}
                      </span>
                    </div>

                    <h2 className="font-bold text-[16px] mt-3 text-[#0F172A]">
                      {technology.name}
                    </h2>

                    <p className="text-[10px] leading-[1.5] text-[#64748B] mt-2">
                      {technology.description}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <span className="bg-[#F1F5F9] text-[#475569] text-[9px] px-2 py-1 rounded">
                        {technology.category}
                      </span>

                      <span className="text-[#64748B] text-[9px]">
                        {technology.difficulty}
                      </span>

                      <span className="text-[#F59E0B] text-[10px] ml-auto">
                        ★ {technology.rating}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToStack(technology)}
                      className="w-full bg-[#0F172A] text-white text-[10px] rounded-[6px] py-2 mt-3"
                    >
                      Add to Stack
                    </button>
                  </div>
                );
              })
            )}
          </div>

          <div className="col-span-1 h-fit border border-[#E5E7EB] rounded-[12px] p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-[14px] text-[#0F172A]">
                Your Stack
                <p className="text-[12px] text-[#94A3B8] mt-1">
                  {Selectedtechnologies.length} Technologies Selected
                </p>
              </h2>
            </div>

            {Selectedtechnologies.length === 0 && (
              <p className="text-[12px] text-[#94A3B8] mt-1">
                No technologies selected yet.
              </p>
            )}

            <div className="mt-3">
              {Selectedtechnologies.length === 0 ? (
                <div className="border border-dashed border-[#E2E8F0] rounded-[8px] h-[70px] flex items-center justify-center">
                  <p className="text-[12px] text-[#CBD5E1] text-center">
                    Your stack is empty.
                  </p>
                </div>
              ) : (
                Selectedtechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between border border-[#E2E8F0] rounded-[8px] px-3 py-2 mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-5 h-5 object-contain"
                      />

                      <span className="text-[13px] font-medium text-[#0F172A]">
                        {technology.name}
                      </span>
                    </div>

                    <button
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="text-[20px] text-[#94A3B8] hover:text-red-500 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
              {Selectedtechnologies.length > 0 && (
                <button
                  onClick={handleRemoveAll}
                  className="w-full border border-[#FCA5A5] text-[#EF4444] text-[13px] rounded-[6px] py-2 mt-5 font-bold"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;
