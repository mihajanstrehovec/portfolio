import Header from "../components/Header";
import SkillBox from "../components/SkillBox";
import skills from "../data/skills";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Header colorTheme="skills"/>
      <div className="grid grid-cols-2 w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14 md:px-10">
          {skills.map((skill) => 
            <div key={skill.title} className='md:w-[538px]'>
              <SkillBox theme="skills" title={skill.title} skills={skill.skills}/>
            </div>
          )}
      </div>
    </div> 
  ); 
}
