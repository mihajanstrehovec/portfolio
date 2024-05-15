import Header from "../components/Header";
import ContentBox from "../components/ContentBox";
import projects from "../data/projects";

export default function Home() {
  return (
    <div className="">
      <Header colorTheme="projects"/>
      <div className="flex flex-wrap columns-2 w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14">
        {projects.map((project)=>
            <div key={project.title} className='md:w-[538px]'>
              <ContentBox 
                title={project.title}
                subTitle={project.subTitle}
                duration={project.duration}
                description={project.description}
                bulletPoints={project.bulletPoints}/>
            </div>
        )}
      </div>
    </div> 
  ); 
}
