import React from "react";
import './Slide1.styles.css';
import anime from "animejs"


function Slide1() {

  //const els = document.querySelectorAll(".el");

  function changeIt() {
    console.log("changeIt Reached");
    anime({
    targets: ".el",
    backgroundColor: "#FFF",
    easing: "easeInOutQuad",
    duration: 2000
    });
  }

  function changeBack() {
    console.log("changeBack Reached");
    anime({
      targets: ".el",
      backgroundColor: "#F00",
      duration: 0
    })
  }

  return (
    <div className="outerHeight">
      <h1>Hello! Hello!!!!
      </h1>
      <button onClick={changeIt}>Change Me!</button>
      <button onClick={changeBack}>Change Back!</button>
      <div className="el">
      </div>
    </div>
  );
}

export default Slide1;



// function getScrollPercent() {
//   var h = document.documentElement,
//   b = document.body,
//   st = 'scrollTop',
//   sh = 'scrollHeight';
//   return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
// }
// // parent = document.querySelector('.outerHeight'),
// const
// els = document.querySelectorAll('.el'),
// tl = anime.timeline({ autoplay: false });

// _.map(els, el => {
//   anime.set(el, {
//     top: anime.random(0, 150) + 'vh',
//     left: anime.random(0, 100) + 'vw' });

//   tl.add({
//     targets: el,
//     translateX: anime.random(-500, 500) + '%',
//     translateY: anime.random(-500, 500) + '%',
//     scale: anime.random(0.3, 1.7),
//     rotate: anime.random(-365, 365) + 'deg',
//     duration: anime.random(500, 5000), easing: 'easeInOutCirc' },
//   0);
// });

// // new AnimePlayer({ add: tl })

// window.addEventListener('scroll', () => {
//   const persentage = getScrollPercent();
//   tl.seek(tl.duration * (persentage * 0.01));
// });