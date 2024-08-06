import react from "react";
import umar from "../assets/images/umar-hire.png";
const Hireme = () => {
  return (
    <div className="py-12 xl:pt-28 bg-gray-100 ">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div className="relative p-0 md:ps-10 md:pb-0 md:pe-0 md:pt-10">
          <div className="flex flex-wrap md:flex-nowrap items-end font-sans relative z-10">
            <div className="flex-none relative w-full md:w-auto pt-10 md:p-0 border-b md:border-0 ">
              <img
                src={umar}
                alt=""
                className="inset-0 w-80 drop-shadow-2xl mx-auto"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-10 w-full md:w-auto">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-3xl font-bold text-slate-900">
                  Open to Work!
                </h1>

                <div className="w-full flex-none text-slate-700 mt-2">
                  <p className=" text-gray-600  dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    lacus nunc, posuere in justo vulputate, bibendum sodales  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    lacus nunc, posuere in justo vulputate, bibendum sodales
                  </p>
                </div>
                <div className='flex gap-4 mt-5'>
                  <div className=' bg-white/60 border border-white rounded-md'>
                    <div className='rounded-md py-2 px-4'>
                      <h4 className='font-bold text-lg'>450+</h4>
                      <p className='opacity-50 text-sm'>Project Completed</p>
                    </div>
                  </div>
                  <div className=' bg-white/60 border border-white rounded-md'>
                    <div className='rounded-md py-2 px-4'>
                      <h4 className='font-bold text-lg'>450+</h4>
                      <p className='opacity-50 text-sm'>Project Completed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 text-sm font-medium border-t border-white mt-5 pt-5">
                <div className="flex-auto flex space-x-4">
                  <button
                    className="btn btn-orange"
                    type="submit"
                  >
                    Hire me
                  </button>
                  <button
                    className="btn btn-lighter"
                    type="button"
                  >
                    Whatsapp
                  </button>
                </div>

              </div>
              {/* <p className="text-sm text-slate-700">
              Free shipping on all continental US orders.
            </p> */}
            </form>
          </div>
          <div className=" bg-white px-10 rounded-t-2xl absolute inset-0 overflow-hidden clip-poly ">
            <div className="bg-gr absolute inset-0"></div>
            <div className="h-full rounded-full bg-gradient-to-l from-blue-100 blur-[106px] dark:from-blue-700"></div>
            <div className="h-full bg-gradient-to-r from-orange-400 to-primary blur-[106px]"></div>
          </div>
          <div className="w-[150px] h-[150px] flex flex-col items-end   text-white pe-3 pt-4 absolute right-0 top-0 bg-orange-400 z-10 clip-corner rounded-t-2xl">
            <span className="font-bold text-sm leading-none">10 Years</span>
            <span className="text-sm leading-none">Exp.</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hireme;
