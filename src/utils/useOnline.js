import { useEffect, useState } from "react"

const useOnline = ()=>{

    // console.log("inside_useOnline_Hook");

    const [isOnline , setIsOnline] = useState(true);

    useEffect(()=>{

        // console.log("inside_useEffect_Online");
        window.addEventListener("online",()=>{
            setIsOnline(true);
            // console.log("Online_event_fired");
        });

        window.addEventListener("offline",()=>{
            setIsOnline(false);
            // console.log("offline_event_fired");
        })
    },[])

    return isOnline;
}

export default useOnline;