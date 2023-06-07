import { useDispatch } from "react-redux";
import { updateData } from "../features/formSlice";
import { useForm } from "react-hook-form";
import MenuBar from "../components/MenuBar";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Personal = ({ setIsCompleted }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("personalData", JSON.stringify(data));
    dispatch(updateData({ property: "name", value: data.name }));
    dispatch(updateData({ property: "email", value: data.email }));
    dispatch(updateData({ property: "phone", value: data.phone }));
    setIsCompleted(true);
    navigate("/plan");
  };

  const savedData = JSON.parse(localStorage.getItem("personalData"));

  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Email format is not valid")
      .required("Email is required"),
    phone: yup.number().required("Number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: savedData?.name || "",
      email: savedData?.email || "",
      phone: savedData?.phone || "",
    },
    resolver: yupResolver(schema),
  });

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

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("name")}
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
              {...register("email")}
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
              type="number"
              id="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              className=" outline-[#483EFF] outline-1 border border-[#D6D9E6] rounded py-3 px-4 max-h-10 mt-1 font-ubuntu font-medium text-base text-[#022959]"
              {...register("phone")}
            />
          </div>

          {Object.keys(errors).length > 0 &&
            (!errors.email || errors.email.type !== "email") && (
              <p className="text-red-500 text-xs italic mt-2">
                All fields are required.
              </p>
            )}
          {!errors.name &&
            !errors.phone &&
            errors.email &&
            errors.email.type === "email" && (
              <p className="text-red-500 text-xs italic mt-2">
                {errors.email.message}
              </p>
            )}
        </form>
      </div>

      <div className="w-full p-4 flex justify-end bg-white mt-auto shadow-md">
        <button
          type="submit"
          className="h-10 w-24 bg-[#022959] font-medium text-sm font-ubuntu text-white rounded-[4px] "
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
Personal.propTypes = {
  setIsCompleted: PropTypes.func.isRequired,
};

export default Personal;
