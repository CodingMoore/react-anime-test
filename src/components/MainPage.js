//import { ReactComponent } from "*.svg";
import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";


class MainPage extends React.Component {
  // constructor() {
  //   super();
  // }


  render() {

    return (
      <React.Fragment>
        <h1>This is only a test!</h1>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </React.Fragment>
    );
  }
}

export default MainPage;