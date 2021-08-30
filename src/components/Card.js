import React, { useState } from "react";

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="card w-[230px] rounded-md m-1"
    >
      {!isShown && (
        <video
          className="video w-full rounded-md"
          controls
          src={movie.thumbnail}
          type="video/mp4"
        ></video>
      )}

      {isShown && (
        <>
          <video
            className="video w-full rounded-md"
            controls
            autoPlay={true}
            loop
            src={movie.thumbnail}
            type="video/mp4"
          ></video>
          <div className="w-full p-3 text-center bg-infoColor z-10">
            <p>{movie.title}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
