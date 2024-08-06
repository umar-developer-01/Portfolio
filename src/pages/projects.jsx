import React from "react";
import { portfolio } from "../constant/data";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className="py-12 md:py-28 ">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0">
        <h3 className=" text-3xl text-center md:xl:text-4xl xl:text-4xl font-black text-gray-900 dark:text-white">
          My <span className="text-orange-600">Projects</span>
        </h3>
        <div className="relative mt-8">
          {portfolio.map((item, index) => (
            <div
              className={`flex flex-wrap md:flex-nowrap gap-0 rounded-3xl overflow-hidden bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] ${
                index == portfolio.length - 1 ? "" : "mb-10"
              }`}
              key={index}
            >
              <div
                className={`${
                  index % 2 !== 0 ? "order-1" : "order-2"
                } p-8 md:p-14 w-full flex items-center`}
              >
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="mb-4">{item.category}</p>
                  <p className="text-lg">
                    {item.descriptions.substring(0, 300)}...
                  </p>
                  <div className="flex mt-4">
                    <Link to="/" className="btn btn-orange">
                      <span className="">View Projects</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={`${index % 2 !== 0 ? "md:order-2" : "md:order-1"} w-full`}
              >
                <img
                  className="w-full h-full object-cover object-top"
                  src={item.img}
                  alt="esoft"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
