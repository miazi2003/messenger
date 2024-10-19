import React from "react";
import "./massegenav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Three() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </Link>
        <div className="imgd">
          <img      src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/462129469_1042273180609587_9182590965179935891_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFKHoeXLok75P7ajKpf84J2a3nYxDLH0pBredjEMsfSkBQqmuoCmfsIEqvY1uRbfVEgceWTii1wLvfKYo7RqsvF&_nc_ohc=mYk0s3wT_EAQ7kNvgEsfgFk&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AKyy4t83ldRj2b-KbJLgBQI&oh=00_AYBYBfnijcNADkK8u2CuE9PgyzMVe18abWKR-iG_AqzEtQ&oe=6717CAB8"
              alt=""
            />

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Afsar Uddin</p>
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

export default Three;
