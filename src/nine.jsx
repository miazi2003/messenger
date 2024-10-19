import React from "react";
import "./massegenav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Nine() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </Link>
        <div className="imgd">
        
           <img
           src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/458199397_1959115721270913_4235904752322097981_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-vy-Pdyk_LHeTvq1RzMyufuHw0jVKz-9-4fDSNUrP74JlOMhF36-kxI0X5MuW0S945hN1XSskl1qg0QXDmAya&_nc_ohc=Q0rualPfMhoQ7kNvgGHmZ7y&_nc_ht=scontent.fdac41-1.fna&_nc_gid=APEgaplrcaVCGcZsAmk0ON3&oh=00_AYBPRghEM2kucJ8qEd9087xZYKeaNQ1S_3lX1c-CjwSMVw&oe=6717AE3D"
           alt=""
         />

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Borhan Uddin</p>
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

export default Nine;
