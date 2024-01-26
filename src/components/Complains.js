import React from "react";
import "./Complains_style.css";
//import { Link } from "react-router-dom";

export default function complains() {
  return (
    <>
      <div className="complains">
     
        <div className="complains_navbar"></div>
        <div className="complain-box">
          <div className="username-box">
            <div className="username-box-marker"></div>
            <div className="username-and-email">
              <div className="username">Username</div>
              <div className="email">email@gmail.com</div>
            </div>
          </div>
          <div className="complain">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
              <div className="complain-delete-box"><button >Delete</button></div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
