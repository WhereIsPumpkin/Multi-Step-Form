import { useLocation } from "react-router-dom";

const MenuBar = () => {
  const location = useLocation();

  return (
    <div className="w-screen h-40 bg-mb-pattern bg-cover bg-no-repeat flex justify-center">
      <div className="flex gap-4 items-center mb-16 ">
        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center border border-white ${
            location.pathname === "/personal"
              ? "bg-[#BEE2FD] !border-[#BEE2FD]"
              : "bg-transparent"
          }`}
        >
          <span
            className={`font-ubuntu text-sm font-bold ${
              location.pathname === "/personal"
                ? "text-[#022959]"
                : "text-white"
            }`}
          >
            1
          </span>
        </div>

        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center border border-white ${
            location.pathname === "/plan"
              ? "bg-[#BEE2FD] !border-[#BEE2FD]"
              : "bg-transparent"
          }`}
        >
          <span
            className={`font-ubuntu text-sm font-bold  ${
              location.pathname === "/plan" ? "text-[#022959]" : "text-white"
            }`}
          >
            2
          </span>
        </div>

        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center border border-white ${
            location.pathname === "/addons"
              ? "bg-[#BEE2FD] !border-[#BEE2FD]"
              : "bg-transparent"
          }`}
        >
          <span
            className={`font-ubuntu text-sm font-bold ${
              location.pathname === "/addons" ? "text-[#022959]" : "text-white"
            }`}
          >
            3
          </span>
        </div>

        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center border border-white ${
            location.pathname === "/finish"
              ? "bg-[#BEE2FD] !border-[#BEE2FD]"
              : "bg-transparent"
          }`}
        >
          <span
            className={`font-ubuntu text-sm font-bold ${
              location.pathname === "/finish" ? "text-[#022959]" : "text-white"
            }`}
          >
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
