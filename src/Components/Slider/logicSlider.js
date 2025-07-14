import { useState } from 'react'

export const logicSlider = (messages, initialIndex=0)=>{

    const [current, setCurrent] = useState(initialIndex)

    const prev = ()=>{
        setCurrent((pre) => (pre === 0 ? messages.length - 1 : pre - 1));    
    }

    const next = () => {
        setCurrent((pre) => (pre === messages.length - 1 ? 0 : pre + 1));
      };


      return {
        current, prev, next
      }

}


