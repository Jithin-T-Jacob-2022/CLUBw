import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import ArrowButtons from "../components/arrowButtons";
import background from "../assets/background.png";
import background_2 from "../assets/background_2.png";
import "../App.css";

const LandingPage = () => {
  const [progress, setProgress] = useState(0); //Tracking ProgressBar
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(background);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          setShowSecondImage((prevShowSecondImage) => !prevShowSecondImage);
          return 0;
        }
        return newProgress;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const switchInterval = setInterval(() => {
      setProgress(0);
      setShowSecondImage((prevShowSecondImage) => !prevShowSecondImage);
    }, 5000); // time interval to control the image switch

    return () => clearInterval(switchInterval);
  }, []);

  const changeBackground = (direction) => {
    if (direction === "left") {
      setCurrentBackground(background);
      setShowSecondImage(false);
    } else {
      setCurrentBackground(background_2);
      setShowSecondImage(true);
    }
  };
  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />

        <div className="pl-9 pt-96 mt-96">
          <ArrowButtons changeBackground={changeBackground} />
        </div>

        <div className="mt-10 pt-5">
          <ProgressBar progress={progress} setProgress={setProgress} />
        </div>

        <img
          src={background}
          className={`w-full h-[1024px] top-0 left-0 absolute -z-50 object-cover transition-opacity duration-1000 ${
            !showSecondImage ? "opacity-100" : "opacity-50 invisible"
          }`}
          alt="Background"
        />
        <img
          src={background_2}
          alt="Additional Image"
          className={`w-full h-[1024px] top-0 left-0 absolute -z-40 object-cover transition-opacity duration-1000 ${
            showSecondImage ? "opacity-100" : "opacity-50 invisible"
          }`}
        />
      </div>
    </>
  );
};

export default LandingPage;
