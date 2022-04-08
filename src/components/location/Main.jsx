const Main = () => {
  return (
    <main className="flex  w-full flex-col gap-12 bg-black px-4 py-12">
      <h1 className="font-['Big_Shoulders_Display'] text-[3.125rem] font-black uppercase leading-[2.813rem] tracking-normal text-white">
        Our Location
      </h1>
      <section className="flex flex-col gap-[1.25rem]">
        <h2 className="font-['Big_Shoulders_Display'] text-[2rem] uppercase leading-[2rem] tracking-normal text-[#D5966C]">
          99 King Street
        </h2>
        <p className="text-lg font-light tracking-normal text-white">
          Newport
          <br />
          RI 02840
          <br />
          United States of America
        </p>
        <p className="text-lg font-light tracking-normal text-white">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </section>
    </main>
  );
};

export default Main;
