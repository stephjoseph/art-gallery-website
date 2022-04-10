import { Link } from "react-router-dom";

import mobileHeroImg from "../../images/mobile/image-hero.jpg";
import iconArrowRight from "../../images/icon-arrow-right.svg";

const Header = () => {
  return (
    <header
      id="header"
      className="mb-[7.5rem] flex w-full flex-col items-center gap-8 md:items-start md:gap-0 xl:relative xl:mb-[11.25rem] xl:w-[79.688rem]  xl:self-start"
    >
      <div className="md:hidden">
        <img src={mobileHeroImg} alt="" />
      </div>
      <div className="absolute z-10 hidden h-[50rem] w-[28.125rem] overflow-hidden bg-[#151515] xl:block">
        <h1 className="absolute left-[10.313rem] top-[11.813rem] w-[32.125rem] font-['Big_Shoulders_Display'] text-[6rem] font-black uppercase leading-[5.5rem] tracking-normal text-white">
          Modern <br /> Art Gallery
        </h1>
      </div>
      <div className="flex w-[21.438rem] flex-col items-start gap-8 md:ml-[50.65vw] md:mt-[9.063rem] md:w-[21.1885rem] xl:ml-[57.813rem] xl:mt-[11.875rem] xl:gap-16">
        <h1 className=" w-[32.125rem] font-['Big_Shoulders_Display'] text-[3.75rem] font-black uppercase leading-[3.438rem] tracking-normal text-[#151515] xl:absolute xl:left-[10.313rem] xl:top-[11.813rem] xl:text-[6rem] xl:leading-[5.5rem]">
          Modern <br className="hidden xl:inline" />
          Art Gallery
        </h1>
        <p className="text-lg font-light tracking-normal text-[#444444] xl:text-[1.375rem] xl:leading-8">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <div>
          <Link className="group flex self-start" to="/location">
            <div className="flex h-[4.5rem] w-[12.75rem] items-center justify-center bg-[#151515] font-['Big_Shoulders_Display'] text-[1.25rem] font-extrabold uppercase leading-6 tracking-[3.64px] text-white group-hover:bg-[#D5966C] group-hover:text-white group-active:bg-[#D5966C] group-active:text-white">
              Our Location
            </div>
            <div className="flex h-[4.5rem] w-14 items-center justify-center bg-[#D5966C] group-hover:bg-[#151515] group-active:bg-[#151515]">
              <img src={iconArrowRight} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
