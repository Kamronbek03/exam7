import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../assets/images/Back.svg";
import Forward from "../assets/images/Forward.svg";
import PlayBack from "../components/PlayBack";
import useSpotifyStore from "../store/useSpotifyStore";
import { useAuth } from "../hook/useAuth";

function Home() {
  const navigate = useNavigate();
  const { fetchTracks, tracks } = useSpotifyStore();
  const [query, setQuery] = useState("");

  useAuth();

  useEffect(() => {
    if (query) {
      fetchTracks(query);
    }
  }, [query]);

  return (
    <div className="bg-custom-gradient h-[100vh]">
      <div className="px-[14px] h-[100vh]">
        <div className="h-[100vh]">
          <div className="flex gap-[22px] py-[20px]">
            <button onClick={() => navigate(-1)}>
              <img src={Back} alt="Back" width={40} height={40} />
            </button>
            <button onClick={() => navigate(+1)}>
              <img src={Forward} alt="Forward" width={40} height={40} />
            </button>
          </div>
          <div className="pt-[30px] flex flex-col gap-[20px] pb-[90px]">
            <h1 className="font-bold text-[39px] leading-[49.33px] mb-[300px] tracking-[1%] text-[#FFFFFF]">
              Good afternoon
            </h1>
            <div className="flex justify-center">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-[90%] scale-100 hover:scale-105 p-2 border-[1.5px] border-slate-400 rounded-md outline-none hover:shadow-2xl hover:shadow-green-500 hover:border-green-500"
                type="text"
                placeholder="Search music"
              />
            </div>
            <div className="flex flex-wrap gap-[15px] justify-center">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  className="flex flex-col rounded-[8px] bg-opacity-[4%] bg-gray-900 border-2 border-gray-700 w-[172px] p-[10px] scale-100 hover:scale-110 active:bg-green-600 cursor-pointer"
                >
                  <img
                    src={track.album.images[0]?.url}
                    alt="Track"
                    width={162}
                    height={162}
                  />
                  <div className="p-2">
                    <p className="font-bold text-[20px] leading-[25.3px] tracking-[3%] text-[#FFFFFF]">
                      {track.name}
                    </p>
                    <p className="font-[450] text-[18px] leading-[22.77px] text-[#B3B3B3]">
                      {track.artists[0].name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fixed w-full bottom-0 left-0">
            <PlayBack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
