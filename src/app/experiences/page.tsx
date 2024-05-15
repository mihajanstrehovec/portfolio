import ContentBox from "../components/ContentBox";
import Header from "../components/Header";
import experiences from "../data/experiences";

export default function Home() {
  return (
    <>
      <Header colorTheme="experiences"/>
      <div className="flex flex-wrap columns-2 w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14">
        {experiences.map((experience, id)=>
          <div key={experience.title} className='md:w-[538px]'>
            <a href={`/experiences/${id}`}>
              <ContentBox 
                title={experience.title}
                subTitle={experience.subTitle}
                duration={experience.duration}
                description={experience.description}
                bulletPoints={experience.bulletPoints}/>
              </a>
          </div>
          )}
      </div>
      
    </> 
  ); 
}
