const Main = () => {
  return (
    <main className="flex  w-full flex-col gap-12 bg-black px-4 py-12 md:flex-row md:gap-[4.25rem] md:px-10 md:pt-[5.5rem] md:pb-20 xl:gap-[13.75rem] xl:px-[10.313rem] xl:pt-[6.5rem] xl:pb-[8rem]">
      <h1 className="font-['Big_Shoulders_Display'] text-[3.125rem] font-black uppercase leading-[2.813rem] tracking-normal text-white  md:h-[6.25rem] md:text-[3.438rem] md:leading-[3.125rem] xl:w-[21.875rem] xl:text-[4.375rem] xl:leading-[4.375rem]">
        Our Location
      </h1>
      <section className="flex flex-col gap-[1.25rem] md:w-[24.875rem] xl:w-[33.75rem]">
        <h2 className="font-['Big_Shoulders_Display'] text-[2rem] uppercase  leading-[2rem] tracking-normal text-[#D5966C] xl:text-[2.25rem] xl:leading-9">
          99 King Street
        </h2>
        <p className="text-lg font-light tracking-normal text-white xl:text-[1.375rem] xl:leading-8">
          Newport
          <br />
          RI 02840
          <br />
          United States of America
        </p>
        <p className="text-lg font-light tracking-normal text-white xl:text-[1.375rem] xl:leading-8">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </section>
    </main>
  );
};

export default Main;
