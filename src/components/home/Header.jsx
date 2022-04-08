import { Link } from "react-router-dom";

import mobileHeroImg from "../../images/mobile/image-hero.jpg";
import iconArrowRight from "../../images/icon-arrow-right.svg";

const Header = () => {
  return (
    <header className="mb-[7.5rem] flex w-full flex-col items-center gap-8">
      <div>
        <img src={mobileHeroImg} alt="" />
      </div>
      <h1 className="w-[21.438rem] font-['Big_Shoulders_Display'] text-[3.75rem] font-black uppercase leading-[3.438rem] tracking-normal text-[#151515]">
        Modern Art Gallery
      </h1>
      <p className="w-[21.438rem] text-lg font-light tracking-normal text-[#444444]">
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <div className="w-[21.438rem]">
        <Link className="group flex self-start" to="/location">
          <div className="flex h-[4.5rem] w-[12.75rem] items-center justify-center bg-[#151515] font-['Big_Shoulders_Display'] text-[1.25rem] font-extrabold uppercase leading-6 tracking-[3.64px] text-white">
            Our Location
          </div>
          <div className="flex h-[4.5rem] w-14 items-center justify-center bg-[#D5966C]">
            <img src={iconArrowRight} alt="" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
