'use client'
import { usePathname } from 'next/navigation';

export default function CarouselContentBox({title, subTitle, duration, description, bulletPoints} : 
    {title: string, subTitle: string, duration: string, description: string, bulletPoints: string[]}
){
    const pathName = usePathname();
    const theme = pathName.split("/")[1];
    return(
        <div className={`w-full border-2 border-primary shadow-xl bg-background min-h-44 ${bulletPoints.length !== 0 ? 'sm:min-h-[240px]' : 'sm:min-h-[110px]' }`} data-theme={theme}>
            <div className='bg-primary w-full px-3 py-2'>
                {title}
            </div>
            <div className='flex justify-between px-6 pt-4 pb-2'>
                <div className='text-sm'>
                    {subTitle}
                </div>
                <div className='text-sm text-subtleText align-bottom hidden sm:block'>
                    {duration}
                </div>
            </div>
            <div className='text-sm px-6 mb-2 text-primary'>
                    {description}
            </div>
            <div className='hidden sm:block text-sm px-10 mb-4 sm:mb-0'>
                <ul className=' list-disc'>
                    {bulletPoints.map((point)=>
                        <li key={point}>{point}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}