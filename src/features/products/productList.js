import {useRef, useEffect, useState} from 'react'

const productList = () => {
    
    const el = useRef(null)
    let isDown = useRef(false)
    let startX = useRef(0)
    let scroll = useRef(0)
    // let isDrag = useRef(false)
    const [isDrag, setIsDrag] = useState(false)


   
    useEffect(()=>{

    const grab = el.current
    if(!grab) return;

    grab.addEventListener("mousedown", (e)=>{
        isDown.current = true
        startX.current = e.pageX - grab.offsetLeft
        scroll.current = grab.scrollLeft

        

    })

    grab.addEventListener("mouseup", ()=>{
        isDown.current = false
        setIsDrag(false)
    })

    grab.addEventListener("mouseleave", ()=>{
        isDown.current = false
               setIsDrag(false)


    })

    grab.addEventListener("mousemove", (e)=>{
        if(!isDown.current) return;
        e.preventDefault()

        setIsDrag(true)
        

        const moving = e.pageX - grab.offsetLeft

        const gap = (startX.current - moving) * 2

        grab.scrollLeft = scroll.current + gap


       

       


    })









    }, [])




 


    return {
      el,
      isDrag
    }

}

export default productList

