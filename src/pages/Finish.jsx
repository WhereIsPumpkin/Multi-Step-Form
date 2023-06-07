import MenuBar from "../components/MenuBar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Finish = () => {
  const formSlice = useSelector((state) => state.form);

  const navigate = useNavigate();
  return (
    <main className="flex flex-col items-center  h-screen">
      <MenuBar />
      <section className="py-8 px-6 flex flex-col max-w-[343px] bg-white rounded-[10px] gap-[22px] shadow-xl -mt-16">
        <header>
          <h1 className="text-[#022959] text-2xl font-ubuntu font-bold mb-2">
            Finishing up
          </h1>

          <p className="font-ubuntu font-normal text-base leading-[25px] text-[#9699AA]">
            Double-check everything looks OK before confirming.
          </p>
        </header>

        <div className="bg-[#F8F9FF] p-4 rounded-lg flex flex-col gap-3 mb-[2px]">
          <div className="flex justify-between items-center pb-3 border-b">
            <div className="flex flex-col">
              <h1 className="font-ubuntu text-sm font-medium text-[#022959]">
                {`${formSlice.plan} (${formSlice.subscriptionType})`}
              </h1>
              <Link
                to="/plan"
                className="text-[#9699AA] text-sm font-normal font-ubuntu underline"
              >
                Change
              </Link>
            </div>
            <span className="font-ubuntu text-sm text-[#022959] font-bold">
              {formSlice.plan === "Arcade" &&
              formSlice.subscriptionType === "Yearly"
                ? "$90/yr"
                : formSlice.plan === "Arcade" &&
                  formSlice.subscriptionType === "Monthly"
                ? "$9/mo"
                : formSlice.plan === "Advanced" &&
                  formSlice.subscriptionType === "Yearly"
                ? "120/yr"
                : formSlice.plan === "Advanced" &&
                  formSlice.subscriptionType === "Monthly"
                ? "$12/mo"
                : formSlice.plan === "Pro" &&
                  formSlice.subscriptionType === "Monthly"
                ? "$15/mo"
                : formSlice.plan === "Pro" &&
                  formSlice.subscriptionType === "Yearly"
                ? "$150/yr"
                : ""}
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            {Object.entries(formSlice.addOns).map(([key, value]) => {
              if (value) {
                return (
                  <li key={key} className="flex justify-between items-center">
                    <h1 className="text-[#9699AA] text-sm font-normal font-ubuntu">
                      {key === "onlineService"
                        ? "Online service"
                        : key === "largeStorage"
                        ? "Larger storage"
                        : key === "customizableProfile"
                        ? "Customizable profile"
                        : ""}
                    </h1>
                    <span className="font-ubuntu text-sm text-[#022959] font-normal">
                      {key === "onlineService" ? "+$1/mo" : "+$2/mo"}
                    </span>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <div className="flex justify-between">
          <h1 className="font-ubuntu text-[#9699AA] font-normal text-sm">
            Total (per month)
          </h1>
          <span className="font-ubuntu text-base font-bold text-[#483EFF]">
            +$12/mo
          </span>
        </div>
      </section>

      <footer className="w-full p-4 flex justify-between bg-white mt-auto shadow-md items-center">
        <Link
          to={"/addons"}
          className="font-ubuntu font-medium text-sm text-[#9699AA]"
        >
          Go Back
        </Link>
        <button
          className="h-10 w-24 bg-[#022959] font-medium text-sm font-ubuntu text-white rounded-[4px]"
          onClick={() => {
            navigate("/thankyou");
          }}
        >
          Next Step
        </button>
      </footer>
    </main>
  );
};

export default Finish;
