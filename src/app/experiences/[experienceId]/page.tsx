import CarouselPreview from "@/app/components/CarouselPreview";
import ExperienceBox from "@/app/components/ExperienceBox";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import experiences from "@/app/data/experiences";
//@ts-ignore
export default function Home({params}) {

    return (
      <>
        <Header colorTheme="experiences"/>
        <div className="flex flex-wrap w-full px-3 md:w-4/5 md:px-0 mx-auto gap-16 max-w-[1140px] justify-center sm:mt-10 mb-14 overflow-hidden">
          <ExperienceBox 
            title={experiences[Number(params.experienceId)].title} 
            subTitle={experiences[Number(params.experienceId)].subTitle} 
            duration={experiences[Number(params.experienceId)].duration}
            experienceObject={experiences[Number(params.experienceId)]}
          />

            <CarouselPreview data={experiences} initSlide={Number(params.experienceId)+1} section="experiences"/>
        </div>
        <Footer/>

        
        
      </> 
    ); 
}