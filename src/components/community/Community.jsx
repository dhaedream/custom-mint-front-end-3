import React from "react";
import "./community.css";
import community from "../../assets/comm-art.png";

const Community = () => {
  return (
    <div className="comm">
      <div className="comm-left">
        <h1 className="comm-header">Community</h1>
        <img src={community} alt="alien-pet" className="comm-art" />
      </div>
      <div className="comm-right">
        <div className="comm-card">
          <p className="comm-para">
            "I want to see if I can. I don't know if I can. I want to find out.
            I want to see. I'm going to do what I always do: I'm going to break
            it down to its smallest form, smallest detail, and go after it. Day
            by day, one day at a time." -Kobe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
