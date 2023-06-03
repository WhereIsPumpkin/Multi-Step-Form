import MenuBar from "../components/MenuBar";

const Personal = () => {
  return (
    <>
      <MenuBar />
      <div className="py-8 px-6 flex flex-col max-w-[343px] bg-white rounded-[10px] gap-[22px] shadow-xl">
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
              className="border border-[#D6D9E6] rounded py-3 px-4 max-h-10 mt-1"
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
              className="border border-[#D6D9E6] rounded py-3 px-4 max-h-10 mt-1"
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
              className="border border-[#D6D9E6] rounded py-3 px-4 max-h-10 mt-1"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Personal;
