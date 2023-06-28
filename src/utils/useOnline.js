import { useEffect, useState } from "react"

const useOnline = ()=>{

    // console.log("inside_useOnline_Hook");

    const [isOnline , setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnline = ()=>{
            setIsOnline(true);
            // console.log("Online_event_fired");
        }
        // console.log("inside_useEffect_Online");

        const handleOffline = ()=>{
            setIsOnline(false);
            // console.log("offline_event_fired");
        }

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
            
        
    },[])

    return isOnline;
}

export default useOnline;