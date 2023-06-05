import checkIcon from "../assets/icon-checkmark.svg";
import PropTypes from "prop-types";
import { useState } from "react";

const Services = ({ title, service, price }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <li
      className={`py-3 px-4 flex justify-between rounded-lg border border-[#D6D9E6] items-center ${
        isChecked ? "!border-[#483EFF] bg-![#F8F9FF]" : null
      }`}
    >
      <div className="flex gap-4 items-center">
        <div
          className={`w-5 h-5 flex items-center justify-center rounded ${
            isChecked
              ? "bg-[#483EFF]"
              : "bg-transparent border border-[#D6D9E6]"
          }`}
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked ? <img src={checkIcon} alt="check icon" /> : null}
        </div>

        <div className="flex flex-col">
          <h1 className="font-ubuntu font-medium text-sm text-[#022959]">
            {title}
          </h1>
          <p className="font-ubuntu font-normal text-xs text-[#9699AA]">
            {service}
          </p>
        </div>
      </div>
      <span className="font-ubuntu font-normal text-xs text-[#483EFF]">
        {price}
      </span>
    </li>
  );
};

Services.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default Services;
