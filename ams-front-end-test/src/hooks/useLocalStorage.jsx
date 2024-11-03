import { useEffect, useState } from "react";

export default function useLocalStorage (key, initialValue) {
    const [value, setValue] = useState(() => {        
        const item = localStorage.getItem(key)
        if(!item) {
            return initialValue
        }
        return JSON.parse(item)
    })    
    
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
          
    }, [value, key])
    return {value, setValue}
}