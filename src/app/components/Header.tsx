'use client'
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'


//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header({colorTheme}:{colorTheme: string}) {
    const nav = [
        {title: 'experiences', link: '/experiences'},
        {title: 'education', link: '/education'},
        {title: 'projects', link: '/projects'},
        {title: 'skills', link: '/skills'},
        {title: 'contact', link: '/contact'}
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <div className="top-0 sticky z-10 bg-background overflow-hidden">
            <div className="container mx-auto sm:pt-14 xl:max-w-[1280px]  " data-theme={colorTheme}>
                <div className="flex sm:hidden justify-end sticky top-0">
                    <button
                        type="button"
                        className={`inline-flex items-center justify-center rounded-md p-2.5  text-primary`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                <div className="grid md:flex md:h-[166px] w-full gap-0 sm:gap-4">
                    <div className={`flex-none mx-auto relative w-[100px] h-[111px] -mt-6 mb-4 sm:mb-0 sm:mt-0  sm:w-[150px] sm:h-[166px] border-2 border-primary shadow-headshot shadow-primary bg-background `}>
                        <Image src='/img/mihajanstrehovec.png' alt='Miha'  width={300} height={300} className="absolute bottom-0"/>
                    </div>
                    <div className={`invisible sm:visible h-0 sm:h-10 md:h-full flex-1 md:border-2 border-primary relative bg-background`}>
                        <p className="p-4 invisible md:visible md:text-xs lg:text-sm xl:text-base">
                            Hello {"{reader.name}"} my name is <span className=" text-titles">Miha Jan Strehovec</span> I’m a dynamic, multifaceted Multimedia Engineer, currently honing skills as a QA Engineer at Plume. At 24, my journey has been diverse and forward-thinking, shaped by experiences that range from web development, QA to digital media leadership. In my free time I like to tackle personal projects that derive from my ideas or the ideas of my friends. Through them I attain new skills that I can then apply in my professional life.
                        </p>
                        <div className={`flex absolute bottom-0 w-full border-l-2 border-r-2 md:border-0 bg-secondary border-primary`}>
                            {nav.map((item) =>
                            <Link 
                                key={item.title}
                                href={item.link}
                                className={` sm:text-sm lg:text-base xl:text-lg flex flex-1 h-10 border-2 border-primary md:border-b-0 border-l-0 justify-center text-center items-center 
                                                                ${item.title === colorTheme ? `bg-primary`: ''} 
                                                                ${item.title == "contact" ? ' border-r-0': ''}`}>
                                        {item.title.toUpperCase()}
                            </Link>
                                
                            )}
                        </div>
                    </div>
                </div>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen} data-theme={colorTheme}>
                    <div className="fixed inset-0 " />
                    <Dialog.Panel className={`fixed inset-y-0 right-0 z-10 w-1/2 h-fit overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-l-2 border-b-2 border-primary`}>
                        <div className="flex items-center justify-end">
                            <button
                                type="button"
                                className={`-m-2.5 rounded-md text-primary`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                            <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="flow-root">
                            <div className=" divide-y divide-gray-500/10 z-30">
                                {nav.map((item) =>
                                    <Link 
                                        key={item.title}
                                        href={item.link}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary`}>
                                                {item.title}
                                    </Link>
                                )}
                                
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
                
            </div>
        </div>
    )
}