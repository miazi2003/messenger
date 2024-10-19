import React from "react";
import "./massegenav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft , faPhone , faVideo , faCircleInfo,faCirclePlus,faCamera, faImage,faMicrophone,faThumbsUp,faFaceSmile} from "@fortawesome/free-solid-svg-icons";
function One() {
  return (
    <div>
      <nav className="nev">
        <div className="g">
        <Link to="/messenger">
      
      <FontAwesomeIcon className="icon" icon={faArrowLeft} />
    </Link>
        <div className="imgd">
          <img      src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/459971273_1193805061877623_2783860488424066212_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzCLl6prhZ-NftlAIbqYjEkPnKrBME9vWQ-cqsEwT29f66GhPb53Qe5PiXvV2H4XC9iKv7N0zYQJzlRief16xw&_nc_ohc=7yG1HW0siVkQ7kNvgGNmHX-&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AD-5xWnIrEaJ-0RwqW-a4iF&oh=00_AYA3e08vgSxGjQIeTxURIHfZElMw7FEV1kArfKDqb3vvlA&oe=67179BDF"
              alt=""/>

         
        </div>
        </div>
       

        <p className="namee">
          <p className="dw"> Mujahidul Islam</p>
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


export default One;