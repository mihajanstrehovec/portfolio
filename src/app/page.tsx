'use-client'
import Header from "./components/Header";
import { useRouter } from "next/router";
import Image from "next/image"
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import LandingButton from "./components/LandingButton";
import ContentBox from "./components/ContentBox";
import experiences from "./data/experiences";

export default function Home() {

  
  return (
    
    <div className="">
      <Header colorTheme="experiences" hamburger={false}/>
      <div className="container grid gap-2 mx-auto sm:pt-14 px-3 mb-6 sm:hidden" data-theme="experiences">
        <div className="grid md:flex md:h-[166px] w-full gap-0 sm:gap-4  border-2 border-primary shadow-xl">
          <div className={` sm:h-10 md:h-full flex-1 md:border-2 border-primary relative bg-background`}>
            <p className="p-4 md:text-xs lg:text-sm xl:text-base">
                Hello {"{reader.name}"} my name is <span className=" text-titles">Miha Jan Strehovec</span> I’m a dynamic, passionate Multimedia Engineer, currently honing skills as a QA Engineer at Plume.<br></br> At 24, my journey has been diverse and forward-thinking, shaped by experiences that range from web development, QA to digital media leadership. In my free time I like to tackle personal projects that derive from my ideas or the ideas of my friends. Through them I attain new skills that I can then apply in my professional life.
            </p>        
          </div>
        </div>

        <LandingButton url="experiences" color="experiences"> EXPERIENCES </LandingButton>
        <LandingButton url="education" color="education"> EDUCATION </LandingButton>
        <LandingButton url="projects" color="projects"> PROJECTS </LandingButton>
        <LandingButton url="skills" color="skills"> SKILLS </LandingButton>
        <LandingButton url="contact" color="contact"> CONTACT </LandingButton>

      </div>

      <div className="hidden  sm:flex flex-wrap columns-2 px-3 sm:px-0 sm:w-4/5 mx-auto gap-16 max-w-[1280px] justify-center mt-10 mb-14">
        {experiences.map((experience, id)=>
          <div key={experience.title} className='md:w-[538px]'>
            {
              id < 5 ?
              <a href={`/experiences/${id}`}>
              <ContentBox 
                title={experience.title}
                subTitle={experience.subTitle}
                duration={experience.duration}
                description={experience.description}
                bulletPoints={experience.bulletPoints}/>
              </a>
              :
              <ContentBox 
                title={experience.title}
                subTitle={experience.subTitle}
                duration={experience.duration}
                description={experience.description}
                bulletPoints={experience.bulletPoints}/>
            }
           
          </div>
          )}
      </div>
    </div>
  ); 
}
