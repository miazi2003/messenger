import React from "react";
import "./massegenav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Six() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </Link>
        <div className="imgd">
          <img    src="
        https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/429584245_308761485550575_8972108658801564170_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEilS1VQRYoW3C1yNzY-Iava9tr0yKJZFZr22vTIolkVv3sSSy1GhjnsaC0BHPbrAwKQD5mvGXTDCSdXclSSUSc&_nc_ohc=914FtVzpMmIQ7kNvgGhSAid&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AMVqpI2fll7k9QMuuLlgn-T&oh=00_AYCAWz3aJInpBggMH9KiXQ0iknGWaJ0PCWaEGwb4xHmxSw&oe=67179D04"
              alt=""
            />

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Atik Ayman</p>
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

export default Six;
