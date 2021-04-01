import React, { useEffect } from "react";
import './Slide2.styles.css';
import anime from "animejs";



function Slide2() {

  // useEffect(() => {
  //   console.log(animation);
  //   animation.seek(5000);
  // });

  

  // useEffect(() => {
  //   anime({
  //     targets: '.el2',
  //     height: 1000,
  //     backgroundColor: "#FFF",
  //     easing: "easeInOutSine",
  //     //autoplay: false
  //   });
  // })

  // window.onscroll = function(e) {
  //   animation.seek(window.pageYOffset);
  //   console.log(window.pageYOffset);
  // };

  // document.addEventListener("DOMContentLoaded", () => {
  //   let waypoint = new Waypoint({
  //     element: document.querySelector(".el2"),
  //     handler: function() {
  //       anime({
  //         targets: '.el2',
  //         height: 1000,
  //         backgroundColor: "#FFF",
  //         easing: "easeInOutSine",
  //         //autoplay: false
  //       });
  //     }
  //   })
  // })
  
  function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    console.log((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
  }

  var animation = anime({
    targets: '.el2',
    height: 1000,
    backgroundColor: "#FFF",
    easing: "easeInOutSine",
    //autoplay: false
  });

  window.addEventListener("scroll", () => {
    const percentage = getScrollPercent();
    animation.seek(animation.duration * (percentage * 0.01));
    //console.log(animation);
  });

  return (
    <div className="slide2">
      <h1>Slide 2!</h1>
      {/* <button onClick={getScrollPercent}>Get Percent</button> */}
      <div className="el2">
      </div>
    </div>
  );
}

export default Slide2;