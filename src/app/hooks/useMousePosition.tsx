import { useEffect, useState } from "react";


export const useMousePosition = () => {
    const [position, setPosition] = useState("centerright")

    useEffect(()=>{
        const headshot = document.getElementById("headshot")
        const headShotPosition = headshot?.getBoundingClientRect()
        //@ts-ignore
        const setFromEvent = (e) => {
            if(headShotPosition){
                if(((headShotPosition.y + headShotPosition.height) - e.clientY) > 0){
                    if(e.clientY >= headShotPosition.y && e.clientY <= (headShotPosition.y + headShotPosition.height)){
                        if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) > 0){
                            setPosition("centerleft")
                        } else if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) < 0){
                            setPosition("centerright")
                        }
                    } else if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) > 0){
                        setPosition("topleft")
                    } else if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) < 0){
                        setPosition("topright")
                    }
                } else if(((headShotPosition.y + headShotPosition.height) - e.clientY) <= 0){
                    if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) > 0){
                        setPosition("bottomleft")
                    } else if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) < 0){
                        setPosition("bottomright")
                    }
                } else {
                    if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) > 0){
                        setPosition("bottomleft")
                    } else if(((headShotPosition.x + headShotPosition.width/2) - e.clientX) < 0){
                        setPosition("bottomright")
                    }
                }    
            }
        } 
        document.addEventListener("mousemove", setFromEvent)

        return () => {
            document.removeEventListener("mousemove", setFromEvent);
          };
    }, [])
    return position;
}