'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExperienceBox from "./ExperienceBox";
import experiences from "../data/experiences";
import ContentBox from "./ContentBox";
import CarouselContentBox from "./CarouselContentBox";

export default function CarouselPreview({data, initSlide, section}:{data:any, initSlide: number, section: string}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initSlide
  };
  return (
    <div className="slider-container w-3/4  sm:w-[550px]  md:block">
      <Slider {...settings}>
        {data.map( //@ts-ignore
            (experience, id)=>
            <div key={experience.title} className='md:w-[538px] px-2'>
                <a href={`/${section}/${id}`}>
                <CarouselContentBox 
                    title={experience.title}
                    subTitle={experience.subTitle}
                    duration={experience.duration}
                    description={experience.description}
                    bulletPoints={experience.bulletPoints}/>
                </a>
            </div>
        )}
      </Slider>
    </div>
  );
}
