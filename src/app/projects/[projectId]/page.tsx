import ExperienceBox from "@/app/components/ExperienceBox";
import Header from "@/app/components/Header";
import projects from "@/app/data/projects";
import CarouselPreview from "@/app/components/CarouselPreview";
import ProjectBox from "@/app/components/ProjectBox";
import Footer from "@/app/components/Footer";
//@ts-ignore
export default function Home({params}) {

    return (
      <div className="">
        <Header colorTheme="projects"/>
        <div className="flex flex-wrap columns-2 px-3 sm:px-0 sm:w-4/5 mx-auto gap-16 max-w-[1140px] justify-center sm:mt-10 mb-14">
          <ProjectBox 
            title={projects[Number(params.projectId)].title} 
            subTitle={projects[Number(params.projectId)].subTitle} 
            duration={projects[Number(params.projectId)].duration}
            description={projects[Number(params.projectId)].description}
            projectObject={projects[Number(params.projectId)]}/>
            
            <CarouselPreview data={projects} initSlide={Number(params.projectId)+1} section="projects"/>
        </div>
        <Footer/>
      </div> 
    ); 
}