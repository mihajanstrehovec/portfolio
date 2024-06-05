'use client'
import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export default function ExperienceBox({title, subTitle, duration, description, bulletPoints, experienceObject} : 
    {title: string, subTitle?: string, duration?: string, description?: string, bulletPoints?: string[], experienceObject: any}
){
    const pathName = usePathname();
    const theme = pathName.split("/")[1];
    console.log(experienceObject)
    return(
        <div className={`w-full border-2 border-primary shadow-xl ${bulletPoints?.length !== 0 ? 'md:min-h-[240px]' : 'md:min-h-[110px]' } bg-background`} data-theme={theme}>
            <div className='bg-primary w-full px-3 py-2'>
                <div className='flex justify-between'>
                    <p>
                        {title}
                    </p>
                    <p>
                        {subTitle}
                    </p>
                </div>
            </div>
            <div className='flex justify-end px-6 pt-4 pb-2'>
                <div className='text-sm text-subtleText align-bottom'>
                    {duration}
                </div>
            </div>
            <div className='px-4 sm:px-0 sm:w-3/4  mx-auto'>
                <p className='text-titles font-semibold px-2'>ROLE OVERVIEW</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                <p className='px-3 mb-8'>{experienceObject.roleOverview.description}</p>


                <p className='text-titles font-semibold px-2'>KEY RESPONSIBILITES</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-3'></div>
                <dl className=" space-y-2 divide-y divide-gray-900/10 px-3 mb-8">
                    {experienceObject.keyResponsibilities.responsibilities.map(
                        //@ts-ignore
                        (responsibility) =>
                        <Disclosure key={responsibility.title} as="div" className="">
                            {({ open }) => (
                            <>
                                <dt>
                                <Disclosure.Button className="flex w-full items-start justify-between text-left bg-primary py-1 px-3">
                                    <span className="leading-7">{responsibility.title}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                    </span>
                                </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel as="dd" className="mt-2 lg:pr-8 xl:pr-12">
                                    <ul className='list-disc px-6  mb-8'>
                                        {responsibility.bulletPoints.map(
                                            //@ts-ignore
                                            (point, i)=>
                                        <li key={i}>
                                            {point}
                                        </li>
                                        )}
                                    </ul>
                                </Disclosure.Panel>
                            </>
                            )}
                        </Disclosure>
                    )}
                </dl>
                

                <p className='text-titles font-semibold px-2'>TOOLS & TECHNOLOGIES</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                <ul className='list-disc px-7  mb-8'>
                    {experienceObject.toolsTechnologies.description.map(
                        //@ts-ignore
                        (tech, i)=>
                        <li key={i}>
                            {tech}
                        </li>
                    )}
                </ul>

                <p className='text-titles font-semibold px-2'>ACHIEVEMENTS & IMPACT</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                <ul className='list-disc px-6  mb-8'>
                    {experienceObject.achievementsImpact.description.map(
                        //@ts-ignore
                        (achievement, i)=>
                        <li key={i}>
                            {achievement}
                        </li>
                    )}
                </ul>


                <p className='text-titles font-semibold px-2'>COLABORATION & TEAMWORK</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                <ul className='list-disc px-6  mb-8'>
                    {experienceObject.collaborationTeamwork.description.map(
                        //@ts-ignore
                        (point, i)=>
                        <li key={i}>
                            {point}
                        </li>
                    )}
                </ul>


                <p className='text-titles font-semibold px-2'>CHALLENGES & SOLUTIONS</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                <ul className='list-disc px-6  mb-8'>
                    {experienceObject.challengesSolutions.description.map(
                        //@ts-ignore
                        (challenge, i)=>
                            <li key={i}>
                                {challenge}
                            </li>
                    )}
                </ul>

                <p className='text-titles font-semibold px-2'>PROFESSIONAL DEVELOPMENT</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                <ul className='list-disc px-6  mb-14'>
                    {experienceObject.professionalDevelopment.description.map(
                        //@ts-ignore
                        (point, i)=>
                        <li key={i}>
                            {point}
                        </li>
                    )}
                </ul>

            </div>
            
            
        </div>
    )
}