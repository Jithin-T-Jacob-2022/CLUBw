import React, { useEffect } from "react";

const ProgressBar = ({ progress, setProgress, setShowSecondImage }) => {
  useEffect(() => {
    const progressBarInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress >= 100 ? 0 : newProgress;
      });
    }, 50); // Interval duration for smoother or faster progress

    const switchInterval = setInterval(() => {
      setShowSecondImage((prevShowSecondImage) => !prevShowSecondImage);
      setProgress(0); // Reset progress to 0 when background changes
    }, 5000); // Interval to reset progress after 5 seconds

    return () => {
      clearInterval(progressBarInterval);
      clearInterval(switchInterval);
    }; // Cleanup intervals
  }, [setProgress, setShowSecondImage]);

  return (
    <div className="flex flex-col">
      <div className="w-full bg-transparent rounded-lg overflow-hidden">
        <div
          className="h-2 bg-progressBg rounded-e-10 transition-all duration-75"
          style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
