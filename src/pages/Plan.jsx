import MenuBar from "../components/MenuBar";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import renderPlanOption from "../components/PlanOption";
import { useState } from "react";
import { Link } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="flex flex-col items-center  h-screen">
      <MenuBar />
      <section className="py-8 px-6 flex flex-col max-w-[343px] bg-white rounded-[10px] gap-[22px] shadow-xl -mt-16">
        <header>
          <h1 className="text-[#022959] text-2xl font-ubuntu font-bold mb-2">
            Select your plan
          </h1>

          <p className="font-ubuntu font-normal text-base leading-[25px] text-[#9699AA]">
            You have the option of monthly or yearly billing.
          </p>
        </header>

        <ul className="flex flex-col gap-3">
          {renderPlanOption(arcadeIcon, "Arcade", "$9/mo")}
          {renderPlanOption(advancedIcon, "Advanced", "$12/mo")}
          {renderPlanOption(proIcon, "Pro", "$15/mo")}
        </ul>

        <div className="flex items-center justify-center bg-[#F8F9FF] rounded-lg py-[14px]">
          <div className="flex items-center gap-5">
            <h1 className="font-ubuntu text-[#022959] font-medium text-sm">
              Monthly
            </h1>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={isChecked ? "Monthly" : "Yearly"}
                className="sr-only peer"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <div className="w-[38px] h-5 bg-gray-200  rounded-full peer dark:bg-custom peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-[#022959] peer-checked:bg-[#022959]"></div>
            </label>

            <h1 className="font-ubuntu text-[#022959] font-medium text-sm">
              Yearly
            </h1>
          </div>
        </div>
      </section>

      <footer className="w-full p-4 flex justify-between bg-white mt-auto shadow-md items-center">
        <Link
          to={"/personal"}
          className="font-ubuntu font-medium text-sm text-[#9699AA]"
        >
          Go Back
        </Link>
        <button
          className="h-10 w-24 bg-[#022959] font-medium text-sm font-ubuntu text-white rounded-[4px]"
          onClick={() => {
            navigate("/plan");
          }}
        >
          Next Step
        </button>
      </footer>
    </main>
  );
};

export default Plan;
