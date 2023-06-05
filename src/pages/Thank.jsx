import MenuBar from "../components/MenuBar";
import thankYouIcon from "../assets/icon-thank-you.svg";
import { useNavigate } from "react-router-dom";

const Thank = () => {
  return (
    <main className="flex flex-col items-center  h-screen">
      <MenuBar />
      <section className="py-20 px-6 flex flex-col max-w-[343px] bg-white rounded-[10px] gap-6 shadow-xl -mt-16 items-center">
        <img src={thankYouIcon} className="w-14 h-14" />
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[#022959] font-ubuntu text-2xl font-bold">
            Thank you!
          </h1>
          <p className="font-ubuntu text-[#9699AA] text-base text-center font-normal">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Thank;
