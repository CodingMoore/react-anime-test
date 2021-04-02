import React, { useEffect, useRef, useLayoutEffect } from "react";
import './Slide2.styles.css';
import anime from "animejs";



function Slide2({progress}) {
  const tl = useRef(anime.timeline({autoplay: false, duration: 1000, easing:'linear'}));
  
  useEffect(() => {
    const animation = {
      targets: document.querySelector('.el2'),
      height: 500,
      backgroundColor: "#FFF",
      loop: true,
      direction: 'alternate',
    }
    tl.current.add(animation);
  }, [])

  useEffect(() => {
    tl.current.seek(tl.current.duration * progress);
  }, [progress])

  return (
    <div className="slide2" style={{height: '100vh'}}>
      <h1>Slide 2!</h1>
      <div className="el2">
      </div>
    </div>
  );
}

export default Slide2;