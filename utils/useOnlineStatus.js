import {useState, useEffect} from "react";

const useOnlineStatus = () => { 
    const [isOnline, setIsOnline] = useState(true);


    //check if online or offline
    useEffect(() => {
        window.addEventListener("online", () => {
      setIsOnline(true);
    });
  });

  return isOnline;
};

export default useOnlineStatus;
