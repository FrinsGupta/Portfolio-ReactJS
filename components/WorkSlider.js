//work slider data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "blogging site",
          path: "/ots.png",
          link: "https://otsnikhilintern.netlify.app/",
        },
        {
          title: "zomato clone",
          path: "/zomato.png",
          link: "https://zomatoclonenikj007.netlify.app/",
        },

        {
          title: "video streaming website",
          path: "/aiflix.png",
          link: "https://aiflixapp.netlify.app/",
        },

        {
          title: "Chingari landing page",
          path: "/chingari.png",
          link: "https://chingariapp.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Remine landing page",
          path: "/remine.png",
          link: "https://remine-limited.netlify.app/",
        },
        {
          title: "music player",
          path: "/spotify.png",
          link: "https://favmusicapp.netlify.app/",
        },
        {
          title: "Banana Language Translator",
          path: "/bananatalk.png",
          link: "https://bananatalkproject.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "blogging site",
          path: "/ots.png",
          link: "https://otsnikhilintern.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="images"
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">
                            <a
                              href={image.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="delay-100"
                            >
                              LIVE
                            </a>
                          </div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <a
                              href={image.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="delay-100"
                            >
                              PROJECT
                            </a>
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <a
                              href={image.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="delay-100"
                            >
                              <BsArrowRight />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
