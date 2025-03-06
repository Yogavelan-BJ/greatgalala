import React from "react";
import { Link, useLocation } from "react-router-dom";

const ClgEventscard = ({ imageUrl, eventName }) => {
  const location = useLocation();

  // Extract the base path from the current URL
  const basePath = location.pathname.split("/")[1] || ""; // Gets the first part of the path

  return (
    <Link to={`/${basePath}/${eventName.toLowerCase().replace(/\s+/g, "")}`}>
      <div className="relative drop-shadow-xl w-32 sm:w-64 md:w-80 h-48 sm:h-[220px] md:h-[250px] overflow-hidden rounded-xl bg-[#3d3c3d]">
        {/* Image - Fills Almost Entire Card */}
        <img
          src={imageUrl}
          alt="Event"
          className="absolute inset-0 w-full h-full object-cover rounded-xl z-[1]"
        />

        {/* Overlay to Darken Image for Better Text Visibility */}
        <div className="absolute inset-0 bg-black opacity-30 z-[2] rounded-xl" />

        {/* Event Name - Centered */}
        <div
          className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-xl md:text-2xl font-bold z-[3]"
          style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
        >
          {eventName}
        </div>

        {/* Neon Glow Effect - Slightly Visible */}
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-500 blur-[50px] -left-1/2 -top-1/2 opacity-40" />
      </div>
    </Link>
  );
};

export default ClgEventscard;
