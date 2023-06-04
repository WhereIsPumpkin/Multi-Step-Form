const renderPlanOption = (icon, title, price) => {
  return (
    <li className="flex gap-4 items-center border border-[#D6D9E6] rounded-lg pt-[14px] pb-[18px] pl-4">
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

export default renderPlanOption;
