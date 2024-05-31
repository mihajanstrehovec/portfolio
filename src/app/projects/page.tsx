import Header from "../components/Header";
import ContentBox from "../components/ContentBox";
import projects from "../data/projects";

export default function Home() {
  return (
    <div className="relative isolate ">
      <Header colorTheme="projects"/>
      <div className="flex flex-wrap columns-2 px-3 w-full sm:px-0 sm:w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14">
        {projects.map((project, id)=>
            <div key={project.title} className='w-full sm:w-[538px]'>
              <a href={`/projects/${id}`}>
                <ContentBox 
                  title={project.title}
                  subTitle={project.subTitle}
                  duration={project.duration}
                  description={project.description}
                  bulletPoints={project.bulletPoints}/>
              </a>
            </div> 
        )}
      </div>
    </div> 
  ); 
}
