import React from "react";
import "./massegenav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function Five() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </Link>
        <div className="imgd">
          <img   src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/462138929_1502706944454628_5487417476903411221_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNanh_iSz7kFJRPB-Kvqn9GlPsbJKEFewaU-xskoQV7NVENq4Fzwtcb7VrlbpNq16gsKQXEBLbUiskfvi8SdBf&_nc_ohc=EguvMLqrocAQ7kNvgHXEBEc&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AYEg3pLzygSXSgup-VVotM2&oh=00_AYAPpUaf7fVjnOt5nr5DDLXTwBC21t_R3GL4sGOcpREbsw&oe=6717B5BC"
              alt=""
            />

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Obaidullah Amin</p>
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

export default Five;
