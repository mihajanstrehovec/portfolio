import Image from "next/image"

export default function SkillBox({theme, title, skills}:{theme:string, title:string , skills: any}){
    return(
        <>
            <div className={`w-full `} data-theme={theme}>
                <div className='bg-primary w-full px-3 py-2'>
                    {title}
                </div>
                <div className="flex flex-wrap columns-2 p-6 justify-center gap-6 ">
                    {skills.map(
                        //@ts-ignore
                        (skill)=>
                        <div key={skill.title} className="flex h-[200px] w-[220px] xl:w-[45%] border-2 border-primary px-4 justify-center items-center text-center relative bg-background certificate_in_box">
                            { skill.img 
                                ?
                                <a href={skill.link} target="_blank" className="absolute w-[220px] h-[200px]">
                                    <Image src={skill.img} width={220} height={200} alt="certificate"  className=" absolute [clip-path:inset(0_0_100%_0)] certificate" ></Image>
                                </a>
                                :
                                <></>
                            }
                            
                            {skill.title}
                            <div className="absolute bottom-2 right-3 text-sm text-gray-500  skill-note block">
                                {skill.note}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}