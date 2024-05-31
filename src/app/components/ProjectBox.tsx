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
    console.log(projectObject)
    return(
        <div className={`w-full border-2 border-primary shadow-xl overflow-hidden relative  ${bulletPoints?.length !== 0 ? 'md:min-h-[240px]' : 'md:min-h-[110px]' } bg-background`} data-theme={theme}>
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
            <div className='w-fit ml-[calc(12.5%)] h-[450px] mb-8'>
                <div className='flex justify-between absolute w-[100%]  items-center'>
                    <div className='w-[500px]'>
                        <p className='text-titles font-semibold px-2'>DESCRIPTION</p>
                        <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                        <p className='px-3 mb-8'>{projectObject.overview.description}</p>
                    </div>
                    
                    <div className='w-[750px] h-[455px] flex items-center opacity-70'>
                        <Image src={projectObject.image[0]} alt='Miha'  width={2250} height={1365} className="img-drop-shadow flex-none aspect-auto w-[750px]"/>
                    </div>
                </div>
            </div>

            <div className='w-3/4 mx-auto mb-12'>
                <p className='text-titles font-semibold px-2'>PROJECT ROLE</p>
                <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-3'></div>
                    <dl className=" space-y-2 divide-y divide-gray-900/10 px-3 mb-8">
                            {projectObject.projectContributions.contributions.map((contributions) =>
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
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <ul className='list-disc px-6  mb-8'>
                                                {contributions.description.map((point, i)=>
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

            <div className='w-fit -ml-[calc(12.5%)] h-[450px] mb-8'>
                <div className='flex justify-between absolute w-[100%]  items-center'>
                    <div className='w-[750px] h-[455px] flex items-center opacity-70 '>
                        <Image src={projectObject.image[1]} alt='Miha'  width={2250} height={1365} className="img-drop-shadow flex-none aspect-auto w-[750px]"/>
                    </div>
                    <div className='w-[500px]'>
                        <p className='text-titles font-semibold px-2'>KEY FEATURES</p>
                        <div className=' bg-primary h-[3px] w-full mx-auto mt-1 mb-2'></div>
                        <ul className='list-disc px-6  mb-8'>
                            {projectObject.keyFeaturesTechnologies.features.map((feature, i)=>
                            <li key={i}>
                                {feature}
                            </li>
                            )}
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
            
            <a href={projectObject.link.url} target='_blank'>
                <div className="flex h-[150px] w-[150px] mx-auto border-2 border-primary px-4 justify-center items-center text-center relative bg-background mb-12">
                    {projectObject.link.type}
                    <div className="absolute bottom-2 right-3 text-sm text-gray-500">
                        {projectObject.link.type}
                    </div>
                </div>
            </a>
            
            
            
        </div>
    )
}