import React from "react";
import './Slide2.styles.css';
import anime from "animejs";
//import _ from "underscore";
import _, { map } from 'underscore';


function Slide2() {

  // function changeIt() {
  //   console.log("changeIt Reached");
  //   anime({
  //   targets: ".el",
  //   backgroundColor: "#FFF",
  //   easing: "easeInOutQuad",
  //   duration: 2000
  //   });
  // }

  // function changeBack() {
  //   console.log("changeBack Reached");
  //   anime({
  //     targets: ".el",
  //     backgroundColor: "#F00",
  //     duration: 0
  //   })
  // }

  function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    console.log((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
  }
  
  const tl = anime.timeline({ autoplay: true });

  
  tl.add({
    targets: ".el",
    backgroundColor: "#FFF",
  })

  window.addEventListener("scroll", () => {
    const percentage = getScrollPercent();
    tl.seek(tl.duration * (percentage * 0.01));
  });

  return (
    <div className="slide2">
      <h1>Slide 2!</h1>
      <button onClick={getScrollPercent}>Get Percent</button>
      <div className="el">
      </div>
    </div>
  );
}

export default Slide2;