/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

interface ImageSliderProps {
  images: string[];
}

const ProjectImageSlider: React.FC<ImageSliderProps> = ({ images }) => {

  return (
    <div className="h-40 overflow-hidden">
    <Swiper
    spaceBetween={0}
    slidesPerView={1}>
        {images.map((image, key)=> (
            <SwiperSlide key={key} > 
                <img className='object-contain flex w-full rounded' src={image} alt="image" /> 
            </SwiperSlide> 
        ))}
    </Swiper>
    </div>
  );
};



export default ProjectImageSlider