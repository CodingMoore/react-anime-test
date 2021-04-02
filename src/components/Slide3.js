import anime, { path } from "animejs";
import React from "react";
import './Slide3.styles.css';


function Slide3() {

  // function morphIt() {
  //   anime({
  //     targets: ".el3",
  //     points: [
  //       { value: [
  //         "M389.159 145.032C400.493 106.634 383.381 69.6488 356.349 43.0809C326.902 14.1385 270.685 -1.49951 215.207 1.06845C200.616 1.74388 180.911 7.94698 173.376 22.0821C166.746 34.519 173.503 47.9295 175.955 60.469C179.708 79.6655 164.074 90.6381 147.681 95.9098C116.707 105.869 83.2863 104.872 52.1267 114.257C25.3277 122.329 -15.4507 145.291 6.02892 178.299C15.8841 193.444 33.2582 201.116 49.9857 206.043C68.1643 211.398 86.9339 214.811 105.666 217.535C144.518 223.186 184.289 227.461 223.512 229.362C258.549 231.059 294.592 228.367 326.84 213.473C355.847 200.076 379.973 176.155 389.159 145.032Z"]
  //       }],
  //       easing: "easeOutQuad",
  //       duration: 2000,
  //   })
  // }

  function morphIt() {
    anime({
      targets: ".el3",
      d: "M389.159 145.032C400.493 106.634 383.381 69.6488 356.349 43.0809C326.902 14.1385 270.685 -1.49951 215.207 1.06845C200.616 1.74388 180.911 7.94698 173.376 22.0821C166.746 34.519 173.503 47.9295 175.955 60.469C179.708 79.6655 164.074 90.6381 147.681 95.9098C116.707 105.869 83.2863 104.872 52.1267 114.257C25.3277 122.329 -15.4507 145.291 6.02892 178.299C15.8841 193.444 33.2582 201.116 49.9857 206.043C68.1643 211.398 86.9339 214.811 105.666 217.535C144.518 223.186 184.289 227.461 223.512 229.362C258.549 231.059 294.592 228.367 326.84 213.473C355.847 200.076 379.973 176.155 389.159 145.032Z",
      easing: "easeOutQuad",
      duration: 2000,
    })
  }

  function morphItBack() {
    anime({
      targets: ".el3",
      tanslateY: -250,
      d: "M40 20C40 23.6429 39.0261 27.0583 37.3244 30C35.6733 32.8542 33.3372 35.2624 30.5408 37C27.4803 38.9017 23.8684 40 20 40C16.1316 40 12.5197 38.9017 9.45915 37C6.66281 35.2624 4.32669 32.8542 2.67564 30C0.973943 27.0583 0 23.6429 0 20C0 16.7628 0.769115 13.7052 2.13458 11C3.79652 7.70747 6.34187 4.93697 9.45915 3C12.5197 1.09827 16.1316 0 20 0C23.8684 0 27.4803 1.09827 30.5408 3C33.6581 4.93697 36.2035 7.70747 37.8654 11C39.2309 13.7052 40 16.7628 40 20Z",
      easing: "easeOutQuad",
      duration: 2000,
    })
  }

  return (
    <div className="slide3">
      <h1>Slide 3!</h1>
      <button onClick={morphIt}>Morph it!</button>
      <button onClick={morphItBack}>Morph it back!</button>
      <svg width="400" height="400" viewBox="0 0 400 400">
        <path className="el3" x="200" y="200" fill="#F00" d= "M40 20C40 23.6429 39.0261 27.0583 37.3244 30C35.6733 32.8542 33.3372 35.2624 30.5408 37C27.4803 38.9017 23.8684 40 20 40C16.1316 40 12.5197 38.9017 9.45915 37C6.66281 35.2624 4.32669 32.8542 2.67564 30C0.973943 27.0583 0 23.6429 0 20C0 16.7628 0.769115 13.7052 2.13458 11C3.79652 7.70747 6.34187 4.93697 9.45915 3C12.5197 1.09827 16.1316 0 20 0C23.8684 0 27.4803 1.09827 30.5408 3C33.6581 4.93697 36.2035 7.70747 37.8654 11C39.2309 13.7052 40 16.7628 40 20Z"/>
      </svg>
    </div>
  );
}

export default Slide3;