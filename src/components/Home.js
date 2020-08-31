import React, {useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'

import fadeIn from 'react-animations/lib/fade-in';

import rightArrow from '../assets/rightArrow.png';

import leftArrow from '../assets/leftArrow.png';


const Styles = styled.div`
.carousal{ 
         height: 80vh%;
         width: 100%;
         
            position: relative;
         &:hover .right-arrow{visibility: visible;} &:hover .left-arrow{visibility: visible;}

}    
.image{
    height: 80vh;
    width: 100%;
    
    animation: ${keyframes`${fadeIn}`} 2s;
    
}
.arrows{
    width: 100%;
    height: 80vh;
    position: absolute;
    z-index: 2;
    display: grid;
    grid: 1fr 5% 1fr / 30% 1fr 30%;
}
.right-arrow{
    
    height: 120px;
    width: 120px;
    visibility: hidden;
    background: url(${rightArrow}) no-repeat;
    background-size: contain;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    margin:auto;
    &:hover {
        cursor: pointer;
    }
    
}
.left-arrow{
    visibility: hidden;
    
    height: 120px;
    width: 120px;
    background: url(${leftArrow}) no-repeat;
    background-size: contain;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin:auto;

    &:hover {
        cursor: pointer;
    }
    
}

`

export const Home = ()=>{
    let [timeout, setTime] = useState('')
    const [click, setClick] = useState('')
    const [x, setX] = useState(0)
    const [duration, setDuration] = useState(true)
    const [img, setImg] = useState('https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    const [images, setImages] = useState(['https://images.pexels.com/photos/3888048/pexels-photo-3888048.jpeg?&dpr=2&h=650&w=940','https://images.pexels.com/photos/3794739/pexels-photo-3794739.jpeg?&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'])

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
    <div>
        <Styles>
        <div className="carousal" key={img}>

            <div className="arrows">
            <div className="left-arrow" onClick={click}></div>
            <div className="right-arrow" onClick={click}></div>
            </div>

            <div className="image"style={{backgroundImage: `url("${img}")`}}>

            </div>
            
        </div>
       {/* 
       <div className="carousal2" key={1+img}>
            <img src={img}></img>
            <button className="left-arrow" onClick={click}>LEFT</button>
            <button className="right-arrow" onClick={click}>RIGHT</button>
        </div>
        */}
        </Styles>
    </div>
    )}

/*import React, {useState, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'

import fadeIn from 'react-animations/lib/fade-in'
import fadeInLeft from 'react-animations/lib/fadeInLeft'

const Styles = styled.div`
.carousal{ 
         height: 300px;
         width: 400px;
         animation: ${keyframes`${fadeIn}`} 2s;

         &:hover .left-arrow, .right-arrow{display: block;}

}    
.img{
    background-size: cover;
    height: 300px;
    width: 400px;
    
}
.left-arrow, .right-arrow{

    display:none;
    
}

`

export const Home = ()=>{
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

    function imgChange(e){
        console.log('animation')
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

        timeout = setTimeout(isDuration, 5000)
        
        //just put an animation in here??
        
      },[duration]);

    return (
    <div>
        <h2>Home Home Home</h2>
        <Styles>
        <div className="carousal" key={img}>
        <button className="left-arrow" onClick={click}>LEFT</button>
            <button className="right-arrow" onClick={click}>RIGHT</button>
            <div className="img" style={{backgroundImage: `url(${img})`}}></div>
            
        </div>
       {/* 
       <div className="carousal2" key={1+img}>
            <img src={img}></img>
            <button className="left-arrow" onClick={click}>LEFT</button>
            <button className="right-arrow" onClick={click}>RIGHT</button>
        </div>
       */