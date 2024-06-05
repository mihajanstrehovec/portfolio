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
                        <div key={skill.title} className="flex h-[200px] w-[220px] xl:w-[45%] border-2 border-primary px-4 justify-center items-center text-center relative bg-background">
                            {skill.title}
                            <div className="absolute bottom-2 right-3 text-sm text-gray-500">
                                {skill.note}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}