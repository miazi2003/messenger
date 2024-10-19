import React from "react";
import "./massegenav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Eight() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </Link>
        <div className="imgd">
        <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/434063204_3583136231999721_413360451232602397_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGAMxZP7yYXPvgr1xjo7-r4EJze4S776_IQnN7hLvvr8kxluG8GscG32_7yaBofNscLo7Lf0SmjSBH6zBlGmG_A&_nc_ohc=WLhHDWC_gVUQ7kNvgFk1wEw&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AznmgMFCvn0sPM-QhwizV1z&oh=00_AYChQtt5TDPCx_Fp6SnDdV3-zxt3eCmMgUSJEvXWp2rrHg&oe=6717B4EB"
              alt=""
            />

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Noman Abdullah</p>
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

export default Eight;
