import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faPen,
  faComment,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./messenger.scss";
import { Link } from "react-router-dom";

function Messenger() {
  return (
    <div className="maindiv">
      <nav>
        <div className="i">
          <button>
            <FontAwesomeIcon className="menu" icon={faBars} />
          </button>
          <h1>Chats</h1>
        </div>
        <button>
          <FontAwesomeIcon className="pen" icon={faPen} />
        </button>
      </nav>

      <div className="input">
        <input type="text" placeholder="Search" />
        <button className="icon">
          <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="online">
        <div className="face">
          <img
            src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/462739288_1266183974553406_7023535426468328319_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGg3Jm2ODZnwL80K47PsHxseEgL-vxfYA94SAv6_F9gD01p38vxgjsREnIjtw3uIuugkxVH0rQBU6Wjoh5wdwoR&_nc_ohc=_0g-jzpaVMwQ7kNvgFHISxQ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=A0739NNuqPVnJXAiIp0_oR1&oh=00_AYAkBd-ARlhl8Pgum5HgBr3x5XAhXJCkAdBaWcWQTwM2mg&oe=6714892A"
            alt=""
          />
        </div>
       <Link to="/one">
       <div className="face">
          <img
            src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/459971273_1193805061877623_2783860488424066212_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzCLl6prhZ-NftlAIbqYjEkPnKrBME9vWQ-cqsEwT29f66GhPb53Qe5PiXvV2H4XC9iKv7N0zYQJzlRief16xw&_nc_ohc=kzhzgRpPrOUQ7kNvgHenizL&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ALDOrr258pAm-o67RRt_tHO&oh=00_AYAWagPXEvknrhrNnmgD6AA-HYwRq9m3381zoXdCVagdWw&oe=6714885F"
            alt=""
          />
        </div>
</Link>
      <Link to="/mas">
      <div className="face">
          <img
            src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/462711447_1097273645148872_6953371146209629792_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE62yNsc5jVm5plrNC6H9EFzgLfcA7Ad-POAt9wDsB342oXU2-ZxSSNXo4HaIHnr4rRCDJnwo2D_zqwpu69c2cn&_nc_ohc=AhI5colYKrMQ7kNvgHOMvXM&_nc_ht=scontent.fdac41-2.fna&_nc_gid=APLcsmXGQKOY6Vb3Ta_f3e5&oh=00_AYCGYWXcMbFWievaW8QA9wrincx6m7wexc5CoDCJ967bgA&oe=67148469"
            alt=""
          />
        </div></Link>
        <Link to="/two">
        <div className="face">
          <img
            src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/457472595_843693084568442_3723291159343314378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE5--4oixUGLnM7oozaWyeZP41CIqSKzZQ_jUIipIrNlCKyNgXZK3rpR4_8jS400yi9NvloBXPRlpsvB7-Ct6bU&_nc_ohc=1XgDQrJ2lbYQ7kNvgFFCsxP&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ACFDI9iXTLW11-lVEU3DPmK&oh=00_AYAfO505J7hIDCm7lRUMdAeOfBtn1NgsIeIUjVghNKdzOQ&oe=6714A80C"
            alt=""
          />
        </div></Link>
      </div>
      <div className="names">
        <p>You</p>
        <p className="m">Mujahid</p>
        <p>Ebrahim</p>
        <p className="n">Emran</p>
      </div>
      <div className="inbox">
        <Link to="/mas">
        <div className="massege">
          <div className="imgf">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/462711447_1097273645148872_6953371146209629792_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE62yNsc5jVm5plrNC6H9EFzgLfcA7Ad-POAt9wDsB342oXU2-ZxSSNXo4HaIHnr4rRCDJnwo2D_zqwpu69c2cn&_nc_ohc=qKShYpUORRQQ7kNvgFhgWa0&_nc_ht=scontent.fdac41-1.fna&_nc_gid=Ap4vkvaf6VcDMQQCTl4s3tE&oh=00_AYA_ODjv0NhD5y5GzDXF4UctBiQLjNsSAITdYY897kxBVg&oe=671797E9"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Md Ebrahim <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to="/one">
       <div className="massege">
          <div className="imgf">
            <img
              src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/459971273_1193805061877623_2783860488424066212_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzCLl6prhZ-NftlAIbqYjEkPnKrBME9vWQ-cqsEwT29f66GhPb53Qe5PiXvV2H4XC9iKv7N0zYQJzlRief16xw&_nc_ohc=7yG1HW0siVkQ7kNvgGNmHX-&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AD-5xWnIrEaJ-0RwqW-a4iF&oh=00_AYA3e08vgSxGjQIeTxURIHfZElMw7FEV1kArfKDqb3vvlA&oe=67179BDF"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Mujahidul Islam <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to="/two">
       <div className="massege">
          <div className="imgf">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/457472595_843693084568442_3723291159343314378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE5--4oixUGLnM7oozaWyeZP41CIqSKzZQ_jUIipIrNlCKyNgXZK3rpR4_8jS400yi9NvloBXPRlpsvB7-Ct6bU&_nc_ohc=1XgDQrJ2lbYQ7kNvgFFCsxP&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AEjaziVAoANHTTGEjbvfW-G&oh=00_AYBJ5j8XTCqnLdseozmyLPBPidBMcrwsy5t-8zeXMsYsQA&oe=6717BB8C"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Emran Mia <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to="/three">
       <div className="massege">
          <div className="imge">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/462129469_1042273180609587_9182590965179935891_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFKHoeXLok75P7ajKpf84J2a3nYxDLH0pBredjEMsfSkBQqmuoCmfsIEqvY1uRbfVEgceWTii1wLvfKYo7RqsvF&_nc_ohc=mYk0s3wT_EAQ7kNvgEsfgFk&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AKyy4t83ldRj2b-KbJLgBQI&oh=00_AYBYBfnijcNADkK8u2CuE9PgyzMVe18abWKR-iG_AqzEtQ&oe=6717CAB8"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Afsar Uddin <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to="/four">
       <div className="massege">
          <div className="imgf">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-1/409214742_1575040013246559_953056880736388859_n.jpg?stp=c0.19.538.538a_dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeEM5s6z4cMmjICjMPAL04vMd2fLasbo7kR3Z8tqxujuRML7oRdacCMgCHUS0zBCVk2vJgfPTn6kiKQn9M_N86pP&_nc_ohc=vRN0c5-QKsoQ7kNvgHulApg&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AefWoaNcXmpUZ5WrkDsdth3&oh=00_AYBriDFvOgbKgdMJdclMzv021j5fzXUolqvA1gqGpWghig&oe=6717C14E"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Rayhan Ahmed Saif <br /> <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to="/five">
       <div className="massege">
          <div className="imge">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/462138929_1502706944454628_5487417476903411221_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNanh_iSz7kFJRPB-Kvqn9GlPsbJKEFewaU-xskoQV7NVENq4Fzwtcb7VrlbpNq16gsKQXEBLbUiskfvi8SdBf&_nc_ohc=EguvMLqrocAQ7kNvgHXEBEc&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AYEg3pLzygSXSgup-VVotM2&oh=00_AYAPpUaf7fVjnOt5nr5DDLXTwBC21t_R3GL4sGOcpREbsw&oe=6717B5BC"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Obaidullah Amin <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
<Link to="/six">
<div className="massege">
          <div className="imgf">
            <img
              src="
        https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/429584245_308761485550575_8972108658801564170_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEilS1VQRYoW3C1yNzY-Iava9tr0yKJZFZr22vTIolkVv3sSSy1GhjnsaC0BHPbrAwKQD5mvGXTDCSdXclSSUSc&_nc_ohc=914FtVzpMmIQ7kNvgGhSAid&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AMVqpI2fll7k9QMuuLlgn-T&oh=00_AYCAWz3aJInpBggMH9KiXQ0iknGWaJ0PCWaEGwb4xHmxSw&oe=67179D04"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Atik Ayman <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to="/seven">
       <div className="massege">
          <div className="imge">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/461784985_1207009913868006_3777195205911870155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF6L0PsIudhH8puhRGz7NzhUk7sRy8ae0NSTuxHLxp7Q3haBCn-pRQYVaGhS38YNaW-rYpDP0h8Sr_pvl_zwDXq&_nc_ohc=Nll7ERxafTgQ7kNvgGJwnNJ&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AzJhX0PocuF7wPuFDMLH_PT&oh=00_AYAUCTJHbDkXG3P8aOQU-pBeadmZtHcSSM-QWy4vhJcWQg&oe=6717AB39"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Abdullah Asfi <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to='/eight'> <div className="massege">
          <div className="imge">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/434063204_3583136231999721_413360451232602397_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGAMxZP7yYXPvgr1xjo7-r4EJze4S776_IQnN7hLvvr8kxluG8GscG32_7yaBofNscLo7Lf0SmjSBH6zBlGmG_A&_nc_ohc=WLhHDWC_gVUQ7kNvgFk1wEw&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AznmgMFCvn0sPM-QhwizV1z&oh=00_AYChQtt5TDPCx_Fp6SnDdV3-zxt3eCmMgUSJEvXWp2rrHg&oe=6717B4EB"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Noman Abdullah <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
       <Link to="/nine">
       <div className="massege">
          <div className="imgf">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/458199397_1959115721270913_4235904752322097981_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG-vy-Pdyk_LHeTvq1RzMyufuHw0jVKz-9-4fDSNUrP74JlOMhF36-kxI0X5MuW0S945hN1XSskl1qg0QXDmAya&_nc_ohc=Q0rualPfMhoQ7kNvgGHmZ7y&_nc_ht=scontent.fdac41-1.fna&_nc_gid=APEgaplrcaVCGcZsAmk0ON3&oh=00_AYBPRghEM2kucJ8qEd9087xZYKeaNQ1S_3lX1c-CjwSMVw&oe=6717AE3D"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Borhan Uddin <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
      <Link to="/ten">
      <div className="massege">
          <div className="imge">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-1/433104843_2379582998897230_5422080400835972440_n.jpg?stp=c0.146.640.640a_dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHXNIvtfR0hq1N0n7XtcVE71BLIiu-UGajUEsiK75QZqLnWtSAWZsd6O32ORxhkDX4hu8TFcEXiIxWmNOjC8co_&_nc_ohc=R3FH8dGnt4AQ7kNvgGR6znS&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AZA40ecuGzEJXen1diQndUT&oh=00_AYAVropoZSKK02MarJEH2bxi4vh9gVz8W7JQ5tpDfk0O8w&oe=6717CAA5"
              alt=""
            />
          </div>
          <div>
            <p className="bold">
              Erfaan Sami <br />
              <p className="h">how r u?</p>
            </p>
          </div>
        </div></Link>
        <div className="massege">
          <div></div>
        </div>
      </div>
      <footer>
        <div className="chats">
          <FontAwesomeIcon className="chats" icon={faComment} />
          <br />
          <p>Chats</p>
        </div>
        <div className="people">
          <FontAwesomeIcon className="people" icon={faUserGroup} />
          <br />
          <p>People</p>
        </div>
        <div className="stories">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-story-icon-download-in-svg-png-gif-file-formats--logo-menu-application-social-media-pack-user-interface-icons-6147390.png?f=webp&w=256"
            alt=""
          />
          <br />
          <p>stories</p>
        </div>
      </footer>
    </div>
  );
}

export default Messenger;
