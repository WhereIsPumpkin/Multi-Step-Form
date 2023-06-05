import MenuBar from "../components/MenuBar";
import { Link, useNavigate } from "react-router-dom";

import Services from "../components/Services";

const AddOns = () => {
  const navigate = useNavigate();
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
          {Services({
            title: "Online service",
            service: "Access to multiplayer games",
            price: "+$1/mo",
          })}
          {Services({
            title: "Larger Storage",
            service: "Extra 1TB of cloud save",
            price: "+$2/mo",
          })}
          {Services({
            title: "Customizable profile",
            service: "Custom theme on your profile",
            price: "+$2/mo",
          })}
        </ul>
      </section>

      <footer className="w-full p-4 flex justify-between bg-white mt-auto shadow-md items-center">
        <Link
          to={"/plan"}
          className="font-ubuntu font-medium text-sm text-[#9699AA]"
        >
          Go Back
        </Link>
        <button
          className="h-10 w-24 bg-[#022959] font-medium text-sm font-ubuntu text-white rounded-[4px]"
          onClick={() => {
            navigate("/finish");
          }}
        >
          Next Step
        </button>
      </footer>
    </main>
  );
};

export default AddOns;
