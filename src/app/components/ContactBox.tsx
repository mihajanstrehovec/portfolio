import Image from "next/image"

export default function ContactBox({ theme }:{ theme:string }){

    const contacts = [
        {title: 'linkedin', link: 'https://www.linkedin.com/in/miha-jan-strehovec-0802a815b/'},
        {title: 'github', link: 'https://github.com/mihajanstrehovec'},
        {title: 'miha.strehovec23@gmail.com', link: 'mailto:miha.strehovec23@gmail.com'}
    ]

    return(
        <>
            <div className={`w-full `} data-theme={theme}>
                <div className='bg-primary w-full px-3 py-2'>
                    You can find me here
                </div>
                <div className="flex flex-wrap columns-3 p-6 justify-center gap-6 ">
                    {contacts.map(
                        //@ts-ignore
                        (contact)=>
                        <a key={contact.title} href={contact.link} target="_blank">
                            <div className="flex h-[200px] w-[220px] border-2 border-primary px-4 justify-center items-center text-center relative text-sm bg-background">
                                    {contact.title == 'miha.strehovec23@gmail.com' 
                                        ? 
                                        <>
                                        <Image src={`/img/icons/email-contact.svg`} alt='Miha'  width={2250} height={1365} className="img-drop-shadow flex-none aspect-auto w-1/2"/>
                                        
                                        <div className="absolute bottom-2 right-3 text-sm text-gray-500">
                                            {contact.title}
                                        </div>
                                        </>
                                        :
                                        <Image src={`/img/icons/${contact.title}-contact.svg`} alt='Miha'  width={2250} height={1365} className="img-drop-shadow flex-none aspect-auto w-1/2"/>
                                    }
                                    
                                
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}