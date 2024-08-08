import React from "react";
import { useNavigate } from "react-router-dom";
import AcUser from "../assets/images/acUser.svg";
import Back from "../assets/images/Back.svg";
import Forward from "../assets/images/Forward.svg";
import Bottom from "../assets/images/bottom.svg";
import LikedLogo from "../assets/images/LikedLogo.png";
import PlayBack from "../components/PlayBack"; // Import Playback component

function Songs() {
  const navigate = useNavigate();

  return (
    <div className="px-[41px] bg-liked-gradient h-[100vh]">
      <div className="flex justify-between py-[20px]">
        <div className="flex gap-[22px]">
          <button onClick={() => navigate(-1)}>
            <img src={Back} alt="orqaga" width={40} height={40} />
          </button>
          <button onClick={() => navigate(+1)}>
            <img src={Forward} alt="oldinga" width={40} height={40} />
          </button>
        </div>
        <div className="flex px-[4px] gap-[11px] items-center rounded-[40px] bg-[#000000CC]">
          <img src={AcUser} alt="account user svg" width={34} height={34} />
          <span className="font-bold text-[18px] leading-[22.77px] tracking-[1%] text-[#FFFFFF]">
            davedirect3
          </span>
          <img src={Bottom} alt="more bottom svg" width={16} height={16} />
        </div>
      </div>
      <div className="flex items-center py-[31px] justify-between">
        <img src={LikedLogo} alt="LikedLogo png" width={257} height={257} />
        <div className="flex flex-col gap-[6px]">
          <strong className="flex flex-col">
            <span className="font-medium text-[16px] leading-[20.24px] tracking-[-2%] text-[#FFFFFF]">
              PUBLIC
            </span>
            <span className="font-medium text-[16px] leading-[20.24px] tracking-[-2%] text-[#FFFFFF]">
              PLAYLIST
            </span>
          </strong>
          <h1 className="font-[900] text-[90px] leading-[154.23px] tracking-[-6%] text-[#FFFFFF]">
            Liked Songs
          </h1>
          <div className="flex items-center gap-[8px]">
            <img src={AcUser} alt="account user svg" width={34} height={34} />
            <span className="font-bold text-[18px] leading-[22.77px] tracking-[1%] text-[#FFFFFF]">
              davedirect3
            </span>
            <span className="py-[4px] text-[white]">.</span>
            <span className="font-[450] text-[18px] leading-[22.77px] tracking-[1%] text-[#FFFFFF]">
              34 songs
            </span>
          </div>
        </div>
      </div>
      <div>
        Playback component with showSaveIcon prop
        <PlayBack showSaveIcon={true} />
      </div>
    </div>
  );
}

export default Songs;
