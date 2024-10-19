import React from "react";
import "./massegenav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Four() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </Link>
        <div className="imgd">
          <img     src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-1/409214742_1575040013246559_953056880736388859_n.jpg?stp=c0.19.538.538a_dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeEM5s6z4cMmjICjMPAL04vMd2fLasbo7kR3Z8tqxujuRML7oRdacCMgCHUS0zBCVk2vJgfPTn6kiKQn9M_N86pP&_nc_ohc=vRN0c5-QKsoQ7kNvgHulApg&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AefWoaNcXmpUZ5WrkDsdth3&oh=00_AYBriDFvOgbKgdMJdclMzv021j5fzXUolqvA1gqGpWghig&oe=6717C14E"
              alt=""
            />
         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Rayhan Ahmed Saif</p>
          <p className="active">Active Now</p>
        </p>
        <div className="element">
          <button><FontAwesomeIcon  className="call" icon={faPhone} /></button>
          <button> <FontAwesomeIcon  className="video" icon={faVideo} /></button>
          <button ><FontAwesomeIcon className="about" icon={faCircleInfo} /></button>
        </div>
      </nav>
    <h1>ERROR</h1>
      <div className="fo">
        <div className="elm">
            <button className="bt"><FontAwesomeIcon className="add" icon={faCirclePlus} /></button>
            <button className="bt"><FontAwesomeIcon className="camera" icon={faCamera} /></button>
            <button className="bt"><FontAwesomeIcon className="images" icon={faImage} /></button>
            <button className="bt"> <FontAwesomeIcon className="mic" icon={faMicrophone} /></button>
        </div>
        <div className="inp"><input type="text" placeholder="Massege" />
        <button className="bt"><FontAwesomeIcon className="em" icon={faFaceSmile} /></button>
        </div>
        <div className="emoji"><button className="bt"><FontAwesomeIcon className="like" icon={faThumbsUp} /></button></div>
      </div>
    </div>
  );
}

export default Four;
