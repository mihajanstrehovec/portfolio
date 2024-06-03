'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page({url, color, children}:{url:string, color: string, children: string}) {
    const router = useRouter()
    const navigateTo = () => {
        router.push(url)
    }
    return(
        <div data-theme={color}>
            <button onClick={navigateTo} className={`w-full shadow-xl border-2 border-primary bg-background py-2`}>
                {children}
            </button>
        </div>
    )
}