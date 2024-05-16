import ExperienceBox from "@/app/components/ExperienceBox";
import Header from "@/app/components/Header";
import projects from "@/app/data/projects";
import experiences from "@/app/data/experiences";
import CarouselPreview from "@/app/components/CarouselPreview";
//@ts-ignore
export default function Home({params}) {

    return (
      <div className="">
        <Header colorTheme="projects"/>
        <div className="flex flex-wrap columns-2 w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14">
          <ExperienceBox 
            title={projects[Number(params.projectId)].title} 
            subTitle={projects[Number(params.projectId)].subTitle} 
            duration={projects[Number(params.projectId)].duration}
            description={projects[Number(params.projectId)].description}/>
            
            <CarouselPreview data={projects} initSlide={Number(params.projectId)+1}/>
        </div>
      </div> 
    ); 
}