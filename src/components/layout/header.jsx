import React, { useState } from "react";
import { menuList } from "../../constant/data";
import { useAuth } from "../../context/appContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { scrollToComponent } = useAuth();

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const mobileLogo = menuList.filter((item) => item.title === "Umar");
  const orderedMenulist = [...menuList.filter((item) => item.title !== "Umar")];



  const handleToggleAndScroll = (ref) =>{
    handleToggle();
    scrollToComponent(ref);
  }


  const handleScroll = (ref) =>{
     if(ref !== ""){
      scrollToComponent(ref);
     } else{
      handleDownload();
     }

  }


  const handleDownload = () => {
    // Path to your PDF file in the public/assets directory
    const pdfPath = '/resume.pdf'; // Correct path for Vite public directory

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.setAttribute('download', 'resume.pdf'); // Ensure download attribute is set
    document.body.appendChild(link);
    link.click();
    
    // Clean up by removing the link element
    document.body.removeChild(link);
  };


  return (
    <header className="mt-10 sticky md:relative top-5 z-20 md:mt-4 mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0">
      <nav className="bg-gray-900 rounded-xl md:rounded-s-full md:rounded-e-full">
        <div className="">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-5 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={handleToggle}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {mobileLogo.map((item, index) => {
                return (
                  <Link
                    to={item.url}
                    className="rounded-md px-3 py-2 text-sm font-medium text-white"
                    key={index}
                  >
                    <span className="flex items-center gap-4">
                      <img
                        src={item.icon}
                        className={
                          item.title === "Umar"
                            ? "text-xl font-semibold w-10 h-10 bg-orange-600 rounded-full"
                            : "hidden"
                        }
                        alt="logo"
                      />
                      <span
                        className={
                          item.title === "Umar"
                            ? "text-md font-bold uppercase"
                            : ""
                        }
                      >
                        {item.title}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex md:space-x-3 items-center">
                  {menuList.map((item, index) => {
                    return (
                      <div
                        className="rounded-md px-2 md:px-3 py-2 text-sm font-medium text-white"
                        key={index}
                        onClick={() =>handleScroll(item.ref)} 
                      >
                        <span className="flex items-center gap-4">
                          <img
                            src={item.icon}
                            className={
                              item.title === "Umar"
                                ? "text-xl font-semibold w-12 h-12 bg-orange-600 rounded-full"
                                : "hidden"
                            }
                            alt="logo"
                          />
                          <span
                            className={
                              item.title === "Umar"
                                ? "text-xl font-bold uppercase"
                                : ""
                            }
                          >
                            {item.title}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden fixed  w-[calc(100%_-_10rem)] h-[calc(100%_-_10rem)] bg-gray-900/90 backdrop-blur-[10px] transition-all duration-500 rounded-xl ${
            isToggled ? "left-6" : "-left-full"
          }`}
          id="mobile-menu"
        >
          <div className="p-10 flex flex-col gap-2">
            {orderedMenulist.map((item, index) => {
              return (
                <div
                  className="rounded-md py-2 text-2xl font-medium text-white"
                  key={index}
                  onClick={() =>handleToggleAndScroll(item.ref)}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={
                        item.title === "Umar"
                          ? "text-xl font-bold uppercase"
                          : ""
                      }
                    >
                      {item.title}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
