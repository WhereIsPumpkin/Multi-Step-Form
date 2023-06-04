import MenuBar from "../components/MenuBar";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center  h-screen">
      <MenuBar />
      <div className="py-8 px-6 flex flex-col max-w-[343px] bg-white rounded-[10px] gap-[22px] shadow-xl -mt-16">
        <div>
          <h1 className="text-[#022959] text-2xl font-ubuntu font-bold mb-2">
            Personal Info
          </h1>
          <p className="font-ubuntu font-normal text-base leading-[25px] text-[#9699AA]">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-ubuntu  font-normal text-xs text-[#022959]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Stephen King"
              className="border border-[#D6D9E6] rounded py-3 px-4 max-h-10 mt-1 outline-[#483EFF] outline-1 font-ubuntu font-medium text-base text-[#022959]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-ubuntu  font-normal text-xs text-[#022959]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              className=" outline-[#483EFF] outline-1 border border-[#D6D9E6] rounded py-3 px-4 max-h-10 mt-1 font-ubuntu font-medium text-base text-[#022959]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="font-ubuntu  font-normal text-xs text-[#022959]"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              className=" outline-[#483EFF] outline-1 border border-[#D6D9E6] rounded py-3 px-4 max-h-10 mt-1 font-ubuntu font-medium text-base text-[#022959]"
            />
          </div>
        </form>
      </div>

      <div className="w-full p-4 flex justify-end bg-white mt-auto">
        <button
          className="h-10 w-24 bg-[#022959] font-medium text-sm font-ubuntu text-white rounded-[4px] "
          onClick={() => {
            navigate("/plan");
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Personal;
