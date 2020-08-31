import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components'

import fadeIn from 'react-animations/lib/fade-in'

const Styles = styled.div`
.carousal{ 
         height: 300px;
         width: 400px;
         
            position: relative;
         &:hover .right-arrow{visibility: visible;} &:hover .left-arrow{visibility: visible;}

}    
img{
    object-fit: cover;
    height: 300px;
    width: 400px;
    animation: ${keyframes`${fadeIn}`} 2s;
    
}
.arrows{
    width: 400px;
    height: 300px;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.right-arrow{
    
    visibility: hidden;
    
    
}
.left-arrow{
    visibility: hidden;
    
    
}

`

export const Carousel = () =>{
    let [timeout, setTime] = useState('')
    const [click, setClick] = useState('')
    const [x, setX] = useState(0)
    const [duration, setDuration] = useState(true)
    const [img, setImg] = useState('https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    const [images, setImages] = useState(['https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/3681641/pexels-photo-3681641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1775029/pexels-photo-1775029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'])

    function cycle(LeftRight){
        if(x>images.length-2){
            setX(0)
            setImg(images[x])
            console.log(x)
        }
        else{setImg(images[x])
            setX(x+1)
            console.log(x)}
    }
  
    
function isDuration(){
    if(duration){
        setDuration(false)
    }
    else{
        setDuration(true)
    }
}
useEffect(() => {
    setClick(() => function clickHandler(e){
        console.log(e.target.className)
        let toggleDuration = (duration) ? false:true;
        clearTimeout(timeout)

        if(e.target.className==="right-arrow"){
         setDuration(toggleDuration)
     }
     else{
         if(x===0){
             setX(images.length-1)
             setImg(images[x])
             console.log(x)
         }
         else{setImg(images[x])
             setX(x-1)
             console.log(x)}
         setDuration(toggleDuration)
     }

     }  )
    
     cycle()

     timeout = setTimeout(isDuration, 6000)
     
     //just put an animation in here??

     return function cleanup() {
        clearTimeout(timeout)
    }
     
   },[duration]);

   return (
    <Styles>
    <div className="carousal" key={img}>

        <div className="arrows">
        <button className="left-arrow" onClick={click}>LEFT</button>
        <button className="right-arrow" onClick={click}>RIGHT</button>
        </div>

        <img src={img}>

        </img>
        
    </div>
   {/* 
   <div className="carousal2" key={1+img}>
        <img src={img}></img>
        <button className="left-arrow" onClick={click}>LEFT</button>
        <button className="right-arrow" onClick={click}>RIGHT</button>
    </div>
    */}
    </Styles>
   )
}