/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ImageSliderProps {
  images: string[];
}

const ProjectImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="">
      <Swiper spaceBetween={0} slidesPerView={1}>
        {images.length === 0 ? (
          <div className="grid h-40 place-items-center rounded bg-gray-200">
            <p className="text-gray-700">Graphics coming soon!</p>
          </div>
        ) : (
          images.map((image, key) => (
            <SwiperSlide key={key}>
              <img
                className="flex max-h-40 w-full rounded object-cover"
                src={image}
                alt="image"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default ProjectImageSlider;
