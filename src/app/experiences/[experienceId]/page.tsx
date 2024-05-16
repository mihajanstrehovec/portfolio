import CarouselPreview from "@/app/components/CarouselPreview";
import ExperienceBox from "@/app/components/ExperienceBox";
import Header from "@/app/components/Header";
import experiences from "@/app/data/experiences";
//@ts-ignore
export default function Home({params}) {

    return (
      <>
        <Header colorTheme="experiences"/>
        <div className="flex flex-wrap columns-2 w-4/5 mx-auto gap-16 max-w-[1140px] justify-center mt-10 mb-14">
          <ExperienceBox 
            title={experiences[Number(params.experienceId)].title} 
            subTitle={experiences[Number(params.experienceId)].subTitle} 
            duration={experiences[Number(params.experienceId)].duration}
            description={experiences[Number(params.experienceId)].description}/>

            <CarouselPreview data={experiences} initSlide={Number(params.experienceId)+1}/>
        </div>

        
        
      </> 
    ); 
}