'use client'
import { usePathname } from "next/navigation";

export default function Gradients(){
    const pathName = usePathname();
    const theme = pathName.split("/")[1];
    return(
        <div data-theme={theme} className="overflow-hidden"> 
            <svg 
                width="1186" 
                height="964" 
                viewBox="0 0 1186 964" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="fixed -left-80   -bottom-[500px] -z-10 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-70">
                <ellipse cx="50%" cy="50%" rx="593" ry="482" fill="url(#left_gradient)" fillOpacity="0.7"  />
                <defs>
                <radialGradient id="left_gradient" cx="0" cy="0" r="1"  gradientTransform="translate(295 88.66) rotate(90) scale(482.257 593)">
                <stop stopColor="var(--color-primary)"/>
                <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0"/>
                </radialGradient>
                </defs>
            </svg> 

            <svg 
                width="1186" 
                height="964" 
                viewBox="0 0 1186 964" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="fixed -right-80 -bottom-[500px] -z-10 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-70">
                <ellipse cx="50%" cy="50%" rx="593" ry="482" fill="url(#left_gradient)" fillOpacity="0.7"  />
                <defs>
                <radialGradient id="left_gradient" cx="0" cy="0" r="1"  gradientTransform="translate(295 88.66) rotate(90) scale(482.257 593)">
                <stop stopColor="var(--color-primary)"/>
                <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0"/>
                </radialGradient>
                </defs>
            </svg> 
      </div>
    )
}