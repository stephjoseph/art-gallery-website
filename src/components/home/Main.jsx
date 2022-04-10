import imageGrid1 from "../../images/mobile/image-grid-1.jpg";
import imageGrid2 from "../../images/mobile/image-grid-2.jpg";
import imageGrid3 from "../../images/mobile/image-grid-3.jpg";
import tabletImageGrid1 from "../../images/tablet/image-grid-1.jpg";
import tabletImageGrid2 from "../../images/tablet/image-grid-2.jpg";
import tabletImageGrid3 from "../../images/tablet/image-grid-3.jpg";
import desktopImageGrid1 from "../../images/desktop/image-grid-1.jpg";
import desktopImageGrid2 from "../../images/desktop/image-grid-2.jpg";
import desktopImageGrid3 from "../../images/desktop/image-grid-3.jpg";

const Main = () => {
  return (
    <main className="mb-[7.5rem] flex w-[21.438rem] flex-col items-center gap-8 md:w-[43.063rem] md:gap-[0.688rem] xl:mb-[11.25rem] xl:w-[69.375rem] xl:gap-[1.875rem]">
      <section className="flex w-full flex-col items-center gap-[1.563rem] md:flex-row-reverse md:gap-[4.25rem] xl:gap-[7.813rem]">
        <div>
          <img className="md:hidden" src={imageGrid1} alt="" />
          <img
            className="hidden md:block md:w-[25rem] xl:hidden"
            src={tabletImageGrid1}
            alt=""
          />
          <img className="hidden xl:block" src={desktopImageGrid1} alt="" />
        </div>
        <div className="flex flex-col gap-[1.313rem] md:w-[13.938rem] md:gap-6 xl:w-[21.875rem] xl:gap-8">
          <h2 className="font-['Big_Shoulders_Display'] text-[3.125rem] font-black uppercase leading-[2.813rem] tracking-normal text-[#151515] xl:text-[3.75rem] xl:leading-[3.75rem]">
            Your Day at the Gallery
          </h2>
          <p className="text-lg font-light tracking-normal text-[#444444] xl:text-[1.375rem] xl:leading-8">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-[24.875rem_17.5rem] md:grid-rows-[19.563rem_24.75rem] md:gap-[0.688rem] xl:grid-cols-[39.688rem_27.813rem] xl:grid-rows-[19.563rem_23.563rem] xl:gap-[1.875rem]">
        <div className="md:row-span-2">
          <img className="md:hidden" src={imageGrid2} alt="" />
          <img
            className="hidden md:block xl:hidden"
            src={tabletImageGrid2}
            alt=""
          />
          <img className="hidden xl:block" src={desktopImageGrid2} alt="" />
        </div>
        <div>
          <img className="md:hidden" src={imageGrid3} alt="" />
          <img
            className="hidden md:block xl:hidden"
            src={tabletImageGrid3}
            alt=""
          />
          <img className="hidden xl:block" src={desktopImageGrid3} alt="" />
        </div>
        <div className="flex flex-col gap-6 bg-[#151515] px-6 py-12 md:py-[5.313rem] md:px-[1.813rem] xl:gap-8 xl:py-16 xl:px-12">
          <h2 className="font-['Big_Shoulders_Display'] text-[3.125rem] font-black uppercase leading-[2.813rem] tracking-normal text-white xl:text-[3.75rem] xl:leading-[3.75rem]">
            Come & Be Inspired
          </h2>
          <p className="text-lg font-light tracking-normal text-white xl:text-[1.375rem] xl:leading-8">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
