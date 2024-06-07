'use client'
import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from "next/image"

export default function ProjectBox({title, subTitle, duration, description, bulletPoints, projectObject} : 
    {title: string, subTitle?: string, duration?: string, description?: string, bulletPoints?: string[], projectObject: any}
){
    const pathName = usePathname();
    const theme = pathName.split("/")[1];
    
    const icons = {
        youtube: '/img/icons/youtube.svg',
        github: '/img/icons/github.svg',
        linkedin: '/img/icons/linkedin.svg',
        instagram: '/img/icons/youtube.svg'
    }

    return(
        <div className={`w-full border-2 border-primary shadow-xl overflow-hidden  relative  ${bulletPoints?.length !== 0 ? 'md:min-h-[240px]' : 'md:min-h-[110px]' } bg-background`} data-theme={theme}>
            <div className='bg-primary w-full px-3 py-2'>
                <div className='flex justify-between'>
                    <p>
                        {title}
                    </p>
                    <p className='hidden sm:block'>
                        {subTitle}
                    </p>
                </div>
            </div>

            <div className='px-4 xl:px-0 xl:w-fit xl:ml-[calc(12.5%)] xl:h-[450px] mt-4 sm:mt-6 mb-8'>
                <div className='xl:flex xl:justify-between  w-[100%] items-center'>
                    <div className='xl:w-[500px]'>
                        <p className='text-titles font-semibold px-2'>DESCRIPTION</p>
                        <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                        <p className='px-3 mb-8'>{projectObject.overview.description}</p>
                    </div>
                    
                    <div className='justify-center xl:w-[750px] xl:h-[455px] flex items-center opacity-70'>
                        <Image src={projectObject.image[0]} alt='Miha'  width={2250} height={1365} className="img-drop-shadow flex-none aspect-auto w-[750px] "/>
                    </div>
                </div>
            </div>

            <div className='px-4 xl:px-0 xl:w-3/4 mx-auto xl:mb-12'>
                <p className='text-titles font-semibold px-2'>PROJECT ROLE</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-3'></div>
                    <dl className="space-y-2 divide-y divide-gray-900/10 px-3 mb-8">
                            {projectObject.projectContributions.contributions.map(
                                //@ts-ignore
                                (contributions) =>
                                <Disclosure key={contributions.title} as="div" className="">
                                    {({ open }) => (
                                    <>
                                        <dt>
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left bg-primary py-1 px-3">
                                            <span className="leading-7">{contributions.title}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                            {open ? (
                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                            )}
                                            </span>
                                        </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 px-2 xl:px-0 sm:pr-12">
                                            <ul className='list-disc pl-3 sm:px-6  mb-8'>
                                                {contributions.description.map(
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
            </div>

            <div className='px-4 xl:px-0 w-fit xl:-ml-[calc(12.5%)] xl:h-[450px] mb-8'>
                <div className='xl:flex justify-between xl:absolute w-[100%]  items-center'>
                    <div className='xl:w-[750px] xl:h-[455px] flex items-center opacity-70 '>
                        <Image src={projectObject.image[1]} alt='Miha'  width={2250} height={1365} className="img-drop-shadow flex-none aspect-auto w-[750px]"/>
                    </div>
                    <div className='mt-8 xl:mt-0 xl:w-[500px]'>
                        <p className='text-titles font-semibold px-2'>KEY FEATURES</p>
                        <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                        <ul className='list-disc px-2 pl-4 lg:pl-6 xl:pl-0  xl:px-6  mb-8'>
                            {projectObject.keyFeaturesTechnologies.features.map(
                                //@ts-ignore
                                (feature, i)=>
                            <li key={i}>
                                {feature}
                            </li>
                            )}
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
            
            <a href={projectObject.link.url} target='_blank'>
                <div className="flex h-[100px] w-[100px] mx-auto border-2 border-primary px-4 justify-center items-center text-center relative bg-background mb-12">
                    <Image src={`/img/icons/${projectObject.link.type}.svg`} alt='Miha'  width={360} height={1365} className="w-4/5"/>
                    
                </div>
            </a>
            
            
            
        </div>
    )
}