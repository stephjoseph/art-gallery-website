import imageGrid1 from "../../images/mobile/image-grid-1.jpg";
import imageGrid2 from "../../images/mobile/image-grid-2.jpg";
import imageGrid3 from "../../images/mobile/image-grid-3.jpg";

const Main = () => {
  return (
    <main className="mb-[7.5rem] flex w-[21.438rem] flex-col items-center gap-8">
      <section className="flex w-full flex-col gap-[1.563rem]">
        <img src={imageGrid1} alt="" />
        <div className="flex flex-col gap-[1.313rem]">
          <h2 className="font-['Big_Shoulders_Display'] text-[3.125rem] font-black uppercase leading-[2.813rem] tracking-normal text-[#151515]">
            Your Day at the Gallery
          </h2>
          <p className="text-lg font-light tracking-normal text-[#444444]">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4">
        <div>
          <img src={imageGrid2} alt="" />
        </div>
        <div>
          <img src={imageGrid3} alt="" />
        </div>
        <div className="flex flex-col gap-6 bg-[#151515] px-6 py-12">
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
