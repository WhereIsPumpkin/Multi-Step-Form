import PropTypes from "prop-types";

const RenderPlanOption = ({ icon, title, price, isActive, handleClick }) => {
  return (
    <li
      onClick={() => handleClick(title)}
      className={`flex gap-4 items-center border border-[#D6D9E6] rounded-lg pt-[14px] pb-[18px] pl-4 ${
        isActive === title ? "!border-[#483EFF] bg-[#F8F9FF]" : ""
      }`}
    >
      <img src={icon} alt={`${title} Icon`} />
      <div className="flex flex-col gap-[6px]">
        <h2 className="font-ubuntu text-[#022959] font-medium text-base">
          {title}
        </h2>
        <span className="font-ubuntu text-[#9699AA] text-sm font-normal">
          {price}
        </span>
      </div>
    </li>
  );
};

RenderPlanOption.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RenderPlanOption;
