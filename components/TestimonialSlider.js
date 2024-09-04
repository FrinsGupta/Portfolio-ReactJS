// testimonial slider data
export const testimonialSlider = [
  {
    image: "/t-avt-1.png",
    name: "Panjab University",
    position: "Hoshiarpur",
    message:
      "Currently pursuing a BTech degree in Computer Science and Engineering, and I am in my 7th semester.",
  },
  {
    image: "/t-avt-2.png",
    name: "M.K. College",
    position: "Bhutahi",
    message:
      "Completed my +2 Level in 2020 and my main subjects were Physics, Chemistry and Math.",
  },
  {
    image: "/t-avt-3.png",
    name: "Divya Jyoti School",
    position: "Lalbandi",
    message:
      "Completed my Schooling in 2018 with 86.25 percentage in class 10 NEB Board.",
  },
];

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="sm:h-[400px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* Avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">            
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                  {/* quote and message */}
                </div>
              </div>
              <div className="bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                {/* <div className="mb-4">
                </div> */}
                {/* message */}
                <div className="xl:text-lg text-center md:text-left py-6">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
