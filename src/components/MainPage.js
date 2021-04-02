//import { ReactComponent } from "*.svg";
import React, { Fragment, useRef, useEffect, useLayoutEffect, useState } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import anime from "animejs";
import Anime from 'react-anime';
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";


export default function MainPage(props){

  return (
    <div id="mainPage">
      <Controller>
        <Scene>
          <h1>This is only a test!</h1>
        </Scene>
        <Scene>
          <Slide1 />
        </Scene>
        <Scene duration={500} triggerElement=".slide2">
          {(progress, event) => {
              return <Slide2 progress={progress} />
          }}
        </Scene>
        <Scene>
          <Slide3 />
        </Scene>
        <Scene>
          <Slide4 />
        </Scene>
      </Controller>
    </div>
  );
}
