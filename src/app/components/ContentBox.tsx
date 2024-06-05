'use client'
import { usePathname } from 'next/navigation';

export default function ContentBox({title, subTitle, duration, description, bulletPoints, expand = true} : 
    {title: string, subTitle: string, duration: string, description: string, bulletPoints: string[], expand?: boolean}
){
    const pathName = usePathname();
    var theme = pathName.split("/")[1];
    if(theme==""){
        theme = "experiences"
    }
    return(
        <div className={`w-full border-2 border-primary shadow-xl bg-background lg:pb-6 ${bulletPoints.length !== 0 ? 'md:min-h-[240px]' : 'md:min-h-[110px]' }`} data-theme={theme}>
            <div className='flex justify-between bg-primary w-full px-3 py-2 max-h-[40px]'>
                <span>{title}</span>
                {
                    expand ? <span className="text-xl"> {">"} </span> : <></>
                }
            </div>
            <div className='sm:flex justify-between gap-4 px-6 pt-4 pb-2'>
                <div className='text-sm'>
                    {subTitle}
                </div>
                <div className='text-sm text-subtleText align-bottom'>
                    {duration}
                </div>
            </div>
            <div className='text-sm px-6 mb-2 text-titles'>
                    {description}
            </div>
            <div className='text-sm px-10 mb-8 sm:mb-0'>
                <ul className=' list-disc'>
                    {bulletPoints.map((point)=>
                        <li key={point}>{point}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}