import Header from "../components/Header";
import SkillBox from "../components/SkillBox";
import skills from "../data/skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <div className="container mx-auto ">
      <Header colorTheme="skills"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-3 sm:px-0 sm:w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14 md:px-10">
          {skills.map((skill) => 
            <div key={skill.title} className='md:w-[538px]'>
              <SkillBox theme="skills" title={skill.title} skills={skill.skills}/>
            </div>
          )}
      </div>
    </div> 
    <Footer/>
    </>
  ); 
}
