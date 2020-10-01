import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";
import rightArrow from "../assets/rightArrow.png";
import leftArrow from "../assets/leftArrow.png";

const Styles = styled.div`
  .carousal {
    height: 80vh%;
    width: 100%;

    position: relative;
    &:hover .right-arrow {
      visibility: visible;
    }
    &:hover .left-arrow {
      visibility: visible;
    }
  }
  .image {
    height: 80vh;
    width: 100%;

    animation: ${keyframes`${fadeIn}`} 2s;
  }
  .arrows {
    width: 100%;
    height: 80vh;
    position: absolute;
    z-index: 2;
    display: grid;
    grid: 1fr 5% 1fr / 30% 1fr 30%;
  }
  .right-arrow {
    height: 120px;
    width: 120px;
    visibility: hidden;
    background: url(${rightArrow}) no-repeat;
    background-size: contain;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    margin: auto;
    &:hover {
      cursor: pointer;
    }
  }
  .left-arrow {
    visibility: hidden;
    height: 120px;
    width: 120px;
    background: url(${leftArrow}) no-repeat;
    background-size: contain;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin: auto;

    &:hover {
      cursor: pointer;
    }
  }
`;
export const Home = () => {
  let [timeout, setTime] = useState("");
  const [click, setClick] = useState("");
  const [x, setX] = useState(0);
  const [duration, setDuration] = useState(true);
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  );
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/3888048/pexels-photo-3888048.jpeg?&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3794739/pexels-photo-3794739.jpeg?&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ]);

  function cycle(LeftRight) {
    if (x > images.length - 2) {
      //puts it back to the start of the images
      setX(0);
      setImg(images[x]);
    } else {
      setImg(images[x]);
      //pushes it forward one image
      setX(x + 1);
    }
  }

  function isDuration() {
    if (duration) {
      setDuration(false);
    } else {
      setDuration(true);
    }
  }

  useEffect(() => {
    setClick(
      () =>
        function clickHandler(e) {
          let toggleDuration = duration ? false : true;
          clearTimeout(timeout);

          if (e.target.className === "right-arrow") {
            setDuration(toggleDuration);
          } else {
            if (x === 0) {
              //it is at the start of the images so going back needs to put it at the end
              setX(images.length - 1);
              setImg(images[x]);
            } else {
              setImg(images[x]);
              //sets it back 1 image
              setX(x - 1);
            }
            setDuration(toggleDuration);
          }
        }
    );

    cycle();

    //the duration between when it will move to the next picture
    timeout = setTimeout(isDuration, 6000);

    //clears timeout so the function does not run exponentially
    return function cleanup() {
      clearTimeout(timeout);
    };
  }, [duration]);

  return (
    <div>
      <Styles>
        <div className="carousal" key={img}>
          <div className="arrows">
            <div className="left-arrow" onClick={click}></div>
            <div className="right-arrow" onClick={click}></div>
          </div>

          <div
            className="image"
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
        </div>
      </Styles>
    </div>
  );
};
