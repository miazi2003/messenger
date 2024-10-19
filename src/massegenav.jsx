import React from "react";
import "./massegenav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Massege() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
      <Link to="/messenger">
      
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </Link>
        <div className="imgd">
          <img   src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/462711447_1097273645148872_6953371146209629792_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE62yNsc5jVm5plrNC6H9EFzgLfcA7Ad-POAt9wDsB342oXU2-ZxSSNXo4HaIHnr4rRCDJnwo2D_zqwpu69c2cn&_nc_ohc=qKShYpUORRQQ7kNvgFhgWa0&_nc_ht=scontent.fdac41-1.fna&_nc_gid=Ap4vkvaf6VcDMQQCTl4s3tE&oh=00_AYA_ODjv0NhD5y5GzDXF4UctBiQLjNsSAITdYY897kxBVg&oe=671797E9"
              alt="" />

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Md Ebrahim</p>
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

export default Massege;
