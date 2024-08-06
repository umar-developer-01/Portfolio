// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative } from 'swiper/modules';
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import { portfolio } from "../constant/data";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="relative py-12 md:py-28 border-t overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0 ">
        <div className="flex justify-between items-end">
          <h3 className=" text-3xl md:xl:text-4xl xl:text-4xl font-black">
            {/* Project<br /> */}
            <span className="text-orange-600">Projects</span>
          </h3>
          <div className="flex">
            <Link to='/projects' className="btn btn-orange">See All</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-20">
        <Swiper
          slidesPerView={2}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              centeredSlides: true,
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {portfolio.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-white rounded-xl overflow-hidden">
                <div>
                  <img className="w-full" src={item.img} alt="esoft" />
                </div>
                <div className="py-4 px-5">
                  <h4 className="font-bold text-xl">{item.title}</h4>
                  <p className="opacity-50">{item.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
      <div className="h-3/4 absolute w-full bg-gradient-to-r from-cyan-100 opacity-25 to-indigo-400 blur-[300px] dark:to-indigo-600 top-2/4"></div>

    </div>
  );
};
export default Portfolio;
