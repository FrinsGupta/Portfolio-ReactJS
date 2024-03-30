// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Let's unlock the true potential of your brand and embark on a transformative journey of storytelling and visual identity that sets you apart in today's competitive market.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Get ready to embark on a design journey that combines innovation, creativity, and purpose to bring your ideas to life. Let's make your project an extraordinary visual reality!",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "As a seasoned developer, I am eager to bring your project to life with clean, efficient, and scalable code.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Get ready to witness the power of words as we breathe life into your brand and connect with your audience on a deeper level.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Get ready to conquer the world of search engines and take your digital growth to new heights!",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65, 47, 123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
