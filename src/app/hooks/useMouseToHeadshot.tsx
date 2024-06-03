import { useEffect, useState } from "react";


export const positionRelativeToHeadshot = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(()=>{
        //@ts-ignore
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })
        document.addEventListener("mousemove", setFromEvent)

        return () => {
            document.removeEventListener("mousemove", setFromEvent);
          };
    }, [])
    return position;
}