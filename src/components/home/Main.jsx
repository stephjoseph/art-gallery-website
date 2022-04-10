import imageGrid1 from "../../images/mobile/image-grid-1.jpg";
import imageGrid2 from "../../images/mobile/image-grid-2.jpg";
import imageGrid3 from "../../images/mobile/image-grid-3.jpg";
import tabletImageGrid1 from "../../images/tablet/image-grid-1.jpg";
import tabletImageGrid2 from "../../images/tablet/image-grid-2.jpg";
import tabletImageGrid3 from "../../images/tablet/image-grid-3.jpg";

const Main = () => {
  return (
    <main className="mb-[7.5rem] flex w-[21.438rem] flex-col items-center gap-8 md:w-[43.063rem] md:gap-[0.688rem]">
      <section className="flex w-full flex-col items-center gap-[1.563rem] md:flex-row-reverse md:gap-[4.25rem]">
        <div>
          <img className="md:hidden" src={imageGrid1} alt="" />
          <img
            className="hidden md:block md:w-[25rem] xl:hidden"
            src={tabletImageGrid1}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[1.313rem] md:w-[13.938rem] md:gap-6">
          <h2 className="font-['Big_Shoulders_Display'] text-[3.125rem] font-black uppercase leading-[2.813rem] tracking-normal text-[#151515]">
            Your Day at the Gallery
          </h2>
          <p className="text-lg font-light tracking-normal text-[#444444]">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-[24.875rem_17.5rem] md:grid-rows-[19.563rem_24.75rem] md:gap-[0.688rem]">
        <div className="md:row-span-2">
          <img className="md:hidden" src={imageGrid2} alt="" />
          <img
            className="hidden md:block xl:hidden"
            src={tabletImageGrid2}
            alt=""
          />
        </div>
        <div>
          <img className="md:hidden" src={imageGrid3} alt="" />
          <img
            className="hidden md:block xl:hidden"
            src={tabletImageGrid3}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 bg-[#151515] px-6 py-12 md:py-[5.313rem] md:px-[1.813rem]">
          <h2 className="font-['Big_Shoulders_Display'] text-[3.125rem] font-black uppercase leading-[2.813rem] tracking-normal text-white">
            Come & Be Inspired
          </h2>
          <p className="text-lg font-light tracking-normal text-white">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
