import MenuBar from "../components/MenuBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../features/formSlice";
import Services from "../components/Services";

const AddOns = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSlice = useSelector((state) => state.form);
  const handleAddOnsChange = (addOnName, isChecked) => {
    dispatch(updateData({ property: `addOns.${addOnName}`, value: isChecked }));
  };
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
            price:
              formSlice.subscriptionType === "Monthly" ? "+$1/mo" : "+$10/yr",
            onChange: (isChecked) =>
              handleAddOnsChange("onlineService", isChecked),
            isChecked: formSlice.addOns.onlineService,
          })}
          {Services({
            title: "Larger Storage",
            service: "Extra 1TB of cloud save",
            price:
              formSlice.subscriptionType === "Monthly" ? "+$2/mo" : "+$20/yr",
            onChange: (isChecked) =>
              handleAddOnsChange("largeStorage", isChecked),
            isChecked: formSlice.addOns.largeStorage,
          })}
          {Services({
            title: "Customizable profile",
            service: "Custom theme on your profile",
            price:
              formSlice.subscriptionType === "Monthly" ? "+$2/mo" : "+$20/yr",
            onChange: (isChecked) =>
              handleAddOnsChange("customizableProfile", isChecked),
            isChecked: formSlice.addOns.customizableProfile,
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
