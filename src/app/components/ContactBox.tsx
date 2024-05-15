export default function ContactBox({ theme }:{ theme:string }){

    const contacts = [
        {title: 'LinkedIn', link: 'https://www.linkedin.com/in/miha-jan-strehovec-0802a815b/'},
        {title: 'GitHub', link: 'https://github.com/mihajanstrehovec'},
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
                            <div className="flex h-[200px] w-[220px] border-2 border-primary px-4 justify-center items-center text-center relative text-sm">
                                
                                    {contact.title}
                                
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}