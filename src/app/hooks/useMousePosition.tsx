import { useEffect, useState } from "react";


export const useMousePosition = () => {

    const headshotPoses = {
        "centerright": '/img/headshot-right.png',
        "centerleft": '/img/headshot-left.png',
        "top": '/img/headshot-top.png',
        "topright": '/img/headshot-top-right.png',
        "topleft": '/img/headshot-top-left.png',
        "bottom": '/img/headshot-bottom.png',
        "bottomright": '/img/headshot-bottom-right.png',
        "bottomleft": '/img/headshot-bottom-left.png',
        "center": '/img/headshot-center.png'
    }

    type HeadshotPosition = keyof typeof headshotPoses;

    interface ImageProps {
        position: HeadshotPosition;
      }

    const [position, setPosition] = useState<HeadshotPosition>("centerright")

    useEffect(()=>{
        const headshot = document.getElementById("headshot")
        const headShotPosition = headshot?.getBoundingClientRect()
        //@ts-ignore
        const setFromEvent = (e) => {
            if(headShotPosition){

                let headshotEndY = headShotPosition.y + headShotPosition.height
                let headshotEndX = headShotPosition.x + headShotPosition.width
                let headshotMiddleX = headShotPosition.x + headShotPosition.width/2

                if(e.clientX >= headShotPosition.x && e.clientX <= headshotEndX){
                    if(e.clientY >= headShotPosition.y && e.clientY <= headshotEndY){
                        setPosition("center")
                    } else if(e.clientY <=  headShotPosition.y){
                        setPosition("top")
                    } else {
                        setPosition("bottom")
                    }
                    
                } else if(((headShotPosition.y + headShotPosition.height) - e.clientY) > 0){
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