import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const Home = () => {
  useEffect(() => {
    const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
      target: "#navbar-example",
      offset: 80,
    });

    return () => {
      scrollSpy.dispose();
    };
  }, []);

  return (
    <Container>
      <div>
        <nav
          id="navbar-example"
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top mx-2"
        >
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#section1">
                  Section 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section2">
                  Section 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section3">
                  Section 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section4">
                  Section 4
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ paddingTop: "56px" }} id="section1">
          Section 1 Content
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra malesuada commodo. Aliquam in ornare purus. Pellentesque ex
            lectus, scelerisque id accumsan suscipit, porttitor in purus. Donec
            viverra justo vel justo faucibus, pharetra lacinia nunc finibus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed ut tincidunt massa. Mauris eget congue
            tellus. Integer eleifend ligula ut lacus congue fermentum. Duis non
            dictum ligula. Ut a feugiat quam. Ut sodales leo justo, facilisis
            imperdiet nisl varius sagittis. Pellentesque interdum eros dui, at
            elementum nisi vulputate nec. Fusce imperdiet sapien eu metus
            interdum accumsan. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Pellentesque et ipsum vel
            odio faucibus vehicula eu ut arcu. Aliquam euismod nisl id purus
            cursus, suscipit sollicitudin velit dictum. Nullam porta rhoncus
            est, eget ornare quam iaculis eu. Vivamus turpis ipsum, tincidunt ut
            lectus nec, malesuada eleifend sapien. Etiam fringilla arcu vel
            nulla tempus, at imperdiet ipsum pellentesque. Cras malesuada enim
            sed lacus efficitur pulvinar. Praesent sodales dolor odio. Curabitur
            eget justo quis est pulvinar bibendum eget a nisl. Duis porttitor ex
            quis sapien ullamcorper efficitur. Duis at nunc at nisl mattis
            dictum. Etiam ultricies accumsan aliquet. Integer interdum vulputate
            posuere. Donec eu ante lacus. Aliquam erat volutpat. Nunc magna
            lorem, sollicitudin quis neque eu, accumsan sollicitudin enim.
            Aliquam rutrum mollis nisl non posuere. Proin a sapien nec mi
            efficitur laoreet. Aenean dignissim volutpat tempus. Ut interdum
            hendrerit felis, feugiat blandit velit imperdiet eget. Curabitur
            mollis ac nunc id efficitur. Pellentesque convallis, lacus ut
            lobortis aliquet, libero dolor mollis nulla, sed pulvinar massa nisi
            et dui. Fusce ac posuere lorem. Nam ac ornare erat, at dapibus
            sapien. Sed vehicula rhoncus turpis. Donec dapibus mattis
            condimentum. Nam ullamcorper, lorem eu accumsan egestas, turpis nibh
            suscipit ligula, non consectetur nulla felis at nisl. Praesent non
            sapien posuere, tincidunt magna et, gravida arcu. Donec semper massa
            gravida purus consequat accumsan. Praesent aliquam, tellus quis
            egestas porta, neque metus lacinia nisl, in congue quam lectus quis
            nibh. In nec scelerisque ligula, nec fermentum orci. Nunc aliquam
            diam et leo efficitur venenatis.
          </p>
        </div>
        <div id="section2">
          Section 2 Content{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra malesuada commodo. Aliquam in ornare purus. Pellentesque ex
            lectus, scelerisque id accumsan suscipit, porttitor in purus. Donec
            viverra justo vel justo faucibus, pharetra lacinia nunc finibus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed ut tincidunt massa. Mauris eget congue
            tellus. Integer eleifend ligula ut lacus congue fermentum. Duis non
            dictum ligula. Ut a feugiat quam. Ut sodales leo justo, facilisis
            imperdiet nisl varius sagittis. Pellentesque interdum eros dui, at
            elementum nisi vulputate nec. Fusce imperdiet sapien eu metus
            interdum accumsan. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Pellentesque et ipsum vel
            odio faucibus vehicula eu ut arcu. Aliquam euismod nisl id purus
            cursus, suscipit sollicitudin velit dictum. Nullam porta rhoncus
            est, eget ornare quam iaculis eu. Vivamus turpis ipsum, tincidunt ut
            lectus nec, malesuada eleifend sapien. Etiam fringilla arcu vel
            nulla tempus, at imperdiet ipsum pellentesque. Cras malesuada enim
            sed lacus efficitur pulvinar. Praesent sodales dolor odio. Curabitur
            eget justo quis est pulvinar bibendum eget a nisl. Duis porttitor ex
            quis sapien ullamcorper efficitur. Duis at nunc at nisl mattis
            dictum. Etiam ultricies accumsan aliquet. Integer interdum vulputate
            posuere. Donec eu ante lacus. Aliquam erat volutpat. Nunc magna
            lorem, sollicitudin quis neque eu, accumsan sollicitudin enim.
            Aliquam rutrum mollis nisl non posuere. Proin a sapien nec mi
            efficitur laoreet. Aenean dignissim volutpat tempus. Ut interdum
            hendrerit felis, feugiat blandit velit imperdiet eget. Curabitur
            mollis ac nunc id efficitur. Pellentesque convallis, lacus ut
            lobortis aliquet, libero dolor mollis nulla, sed pulvinar massa nisi
            et dui. Fusce ac posuere lorem. Nam ac ornare erat, at dapibus
            sapien. Sed vehicula rhoncus turpis. Donec dapibus mattis
            condimentum. Nam ullamcorper, lorem eu accumsan egestas, turpis nibh
            suscipit ligula, non consectetur nulla felis at nisl. Praesent non
            sapien posuere, tincidunt magna et, gravida arcu. Donec semper massa
            gravida purus consequat accumsan. Praesent aliquam, tellus quis
            egestas porta, neque metus lacinia nisl, in congue quam lectus quis
            nibh. In nec scelerisque ligula, nec fermentum orci. Nunc aliquam
            diam et leo efficitur venenatis.
          </p>
        </div>
        <div id="section3">Section 3 Content</div>
        <div id="section4">Section 4 Content</div>
      </div>
    </Container>
  );
};

export default Home;
