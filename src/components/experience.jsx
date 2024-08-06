import React from "react";
import { myExperience } from "../constant/data";


const Experience = () => {

  return (
    <div className="relative py-12 md:py-28 border-t overflow-hidden">
      <div className="absolute grid h-full  w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80">
        <div className="h-full bg-gradient-to-br from-orange-400 to-purple-200 blur-[106px] dark:from-blue-700"></div>
        <div className="h-full bg-gradient-to-r from-cyan-100 to-indigo-400 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0 ">
        <div className="">
          <div className="relative rounded-3xl md:border border-gray-100 md:bg-white md:shadow-2xl md:pt-20 shadow-gray-600/20 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none">
            <div className="text-center md:w-12/12">
              <h3 className=" text-3xl md:xl:text-4xl xl:text-4xl font-black text-gray-900 dark:text-white">
                My Work <span className="text-orange-600">Experince</span>
              </h3>
            </div>
            <div className="gap-12 p-0 pt-8 md:p-12">
              {myExperience.map((item, index) => {
                return (
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border border-white bg-white/50 rounded-xl p-5  md:border-0 md:mb-0 md:p-0 md:bg-transparent  ${index == myExperience.length - 1 ? "" : "md:divide-x mb-5"
                      }`} key={index}
                  >
                    <div className="pe-20 pb-4 md:pb-10">
                      <h3 className="text-2xl font-bold mb-2">
                        {item.company}
                      </h3>
                      <p className="opacity-50">{item.duration}</p>
                    </div>
                    <div className="ps-0 md:ps-20 relative pb-0 md:pb-10">
                      <span className={`absolute hidden md:flex items-center justify-center w-10 h-10 border border-dashed border-orange-600 bg-white -left-5 rounded-full ${index % 2 !== 0 ? 'border-gray-500' : ''}`}>
                        <span className={`w-6 h-6 bg-orange-300 rounded-full ${index % 2 !== 0 ? 'bg-gray-500' : ''}`}></span>
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {item.experience}
                      </h3>
                      <p className="">{item.description} </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
