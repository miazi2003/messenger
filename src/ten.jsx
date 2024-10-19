import React from "react";
import "./massegenav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Ten() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </Link>
        <div className="imgd">
           <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-1/433104843_2379582998897230_5422080400835972440_n.jpg?stp=c0.146.640.640a_dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHXNIvtfR0hq1N0n7XtcVE71BLIiu-UGajUEsiK75QZqLnWtSAWZsd6O32ORxhkDX4hu8TFcEXiIxWmNOjC8co_&_nc_ohc=R3FH8dGnt4AQ7kNvgGR6znS&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AZA40ecuGzEJXen1diQndUT&oh=00_AYAVropoZSKK02MarJEH2bxi4vh9gVz8W7JQ5tpDfk0O8w&oe=6717CAA5"
              alt=""
            />

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Erfaan Sami</p>
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

export default Ten;
