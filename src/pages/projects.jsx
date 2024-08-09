import React, { useEffect } from "react";
import { portfolio } from "../constant/data";


const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 md:py-28 ">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0">
        <h3 className="text-3xl text-center md:xl:text-4xl xl:text-4xl font-black text-gray-900 dark:text-white">
          <span className="text-orange-600">Projects</span>
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
                className={`order-2 px-8 py-6 md:px-14 w-full flex items-center`}
              >
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="mb-4">{item.category}</p>
                  <p className="text-lg">
                     <ul className="list-disc pl-5">
                        {item.descriptions.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    
                  </p>
                  <div className="flex mt-4">
                    <a
                      href={item.url}
                      className="btn btn-orange"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="">View Projects</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`order-1 ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                } w-full h-full`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt="project"
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
