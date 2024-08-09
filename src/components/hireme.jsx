import React, { forwardRef } from 'react';
import umar from "../assets/images/umar-hire.png";

// eslint-disable-next-line react/display-name
const Hireme = forwardRef((props, ref) => {

  return (
    <div className="py-12 xl:pt-28 bg-gray-100" ref={ref} {...props}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div className="relative p-0 md:ps-10 md:pb-0 md:pe-0 md:pt-10">
          <div className="flex flex-wrap md:flex-nowrap  font-sans relative z-10 items-center">
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
                    Hi! I am ready to building new products and solving new
                    challlenges.
                    <br />
                    Lets begin our journey together. 
                    <br />
                    Contact me on email umarkhandev9@gmail.com
                  </p>
                </div>
         
              </div>

              <div className="flex text-sm font-medium border-t border-white mt-5 pt-5">
                <div className="flex-auto flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/umar-ali-k/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-orange px-6 md:px-10"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://wa.me/916394913131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lighter px-6 md:px-10"
                  >
                    Whatsapp
                  </a>

                </div>
              </div>
            </form>
          </div>
          <div className=" bg-white px-10 rounded-t-2xl absolute inset-0 overflow-hidden clip-poly ">
            <div className="bg-gr absolute inset-0"></div>
            <div className="h-full rounded-full bg-gradient-to-l from-blue-100 blur-[106px] dark:from-blue-700"></div>
            <div className="h-full bg-gradient-to-r from-orange-400 to-primary blur-[106px]"></div>
          </div>
   
        </div>
      </div>
    </div>
  );
});

export default Hireme;
