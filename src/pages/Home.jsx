import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../assets/images/Back.svg";
import Forward from "../assets/images/Forward.svg";
import SpotifyWebApi from "spotify-web-api-node";
import PlayBack from "../components/PlayBack";
import ArtistList from "../components/ArtistList";
import { useAuth } from "../hook/useAuth";

function Home({ code }) {
  const spotifyApi = new SpotifyWebApi({
    clientId: "2cb56d4f647648ec91e1318a2fa5914b",
  });
  const accessToken = useAuth(code);
  const navigate = useNavigate();

  const [titles] = useState([
    "Shoxrux",
    "Ummon",
    "Sherali Jo'rayev",
    "Asl Wayne",
    "Green71",
  ]);
  const [title, setTitle] = useState("");
  const [play, setPlay] = useState("");
  const [playing, setPlaying] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [searchArtists, setSearchArtists] = useState("");
  const [artists, setArtists] = useState([]);
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [showAllArtists, setShowAllArtists] = useState(false);
  const [tracksList, setTracksList] = useState(Array(5).fill([]));
  const [showAll, setShowAll] = useState(Array(5).fill(false));

  const choosePlay = (item) => {
    setPlay(item.uri);
    setPlaying(true);
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken, spotifyApi]);

  useEffect(() => {
    const fetchTracks = async () => {
      const newTracksList = await Promise.all(
        titles.map(async (title) => {
          if (title && accessToken) {
            try {
              const res = await spotifyApi.searchTracks(title);
              return res.body.tracks.items.map((item) => ({
                img: item.album.images[0]?.url,
                artist: item.artists[0].name,
                name: item.name,
                uri: item.uri,
                id: item.id,
              }));
            } catch (err) {
              console.error(`Error searching tracks for ${title}:`, err);
              return [];
            }
          }
          return [];
        })
      );
      setTracksList(newTracksList);
    };

    if (accessToken) {
      fetchTracks();
    }
  }, [titles, accessToken, spotifyApi]);

  // useEffect(() => {
  //     if (title) {
  //         spotifyApi.searchTracks(title).then((res) => {
  //             setTracks(res.body.tracks.items.map((item) => ({
  //                 img: item.album.images[0].url,
  //                 artist: item.artists[0].name,
  //                 name: item.name,
  //                 uri: item.uri,
  //                 id: item.id,
  //             })));
  //         }).catch(err => {
  //             console.error(`Error searching tracks for ${title}:`, err);
  //         });
  //     } else {
  //         setTracks([]);
  //     }
  // }, [title, accessToken, spotifyApi]);

  useEffect(() => {
    if (searchArtists) {
      spotifyApi
        .searchArtists(searchArtists)
        .then((res) => {
          setArtists(
            res.body.artists.items.map((item) => ({
              img: item.images[0]?.url,
              name: item.name,
              uri: item.uri,
              id: item.id,
            }))
          );
        })
        .catch((err) => {
          console.error(`Error searching artists for ${searchArtists}:`, err);
        });
    } else {
      setArtists([]);
    }
  }, [searchArtists, accessToken, spotifyApi]);

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
              {/* <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-[48%] p-2 border-[1.5px] border-slate-400 rounded-md outline-none hover:shadow-2xl hover:shadow-green-500 hover:border-green-500"
                                type="text"
                                placeholder="Search music"
                            /> */}
              <input
                value={searchArtists}
                onChange={(e) => setSearchArtists(e.target.value)}
                className="w-[90%] scale-100 hover:scale-105 p-2 border-[1.5px] border-slate-400 rounded-md outline-none hover:shadow-2xl hover:shadow-green-500 hover:border-green-500"
                type="text"
                placeholder="Search artist"
              />
            </div>
            <div className="flex justify-between">
              {/* <div className="flex justify-between flex-col gap-[15px] w-[48%]">
                                <div className="flex  justify-between gap-5 flex-wrap">
                                    {tracks.slice(0, showAllTracks ? tracks.length : 4).map((item) => (
                                        <ArtistList key={item.id} choosePlay={() => choosePlay(item)} item={item} />
                                    ))}
                                </div>
                                <div className='flex justify-center'>
                                    {tracks.length > 4 && (
                                        <button className='text-[#ADADAD] font-bold text-[16px] leading-[20.24px] tracking-[8%]' onClick={() => setShowAllTracks(!showAllTracks)}>
                                            {showAllTracks ? "SHOW LESS" : "SEE ALL"}
                                        </button>
                                    )}
                                </div>
                            </div> */}
              <div className="flex justify-between flex-col gap-[15px]">
                <div className=" flex justify-center gap-[58px] flex-wrap">
                  {artists
                    .slice(0, showAllArtists ? artists.length : 4)
                    .map((item) => (
                      <ArtistList
                        key={item.id}
                        choosePlay={() => choosePlay(item)}
                        item={item}
                      />
                    ))}
                </div>
                <div className="flex justify-center">
                  {artists.length > 4 && (
                    <button
                      className="text-[#ADADAD] font-bold text-[16px] leading-[20.24px] tracking-[8%]"
                      onClick={() => setShowAllArtists(!showAllArtists)}
                    >
                      {showAllArtists ? "SHOW LESS" : "SEE ALL"}
                    </button>
                  )}
                </div>
              </div>
            </div>
            {titles.map((title, index) => (
              <div key={index}>
                <div className="flex justify-between p-3 items-center">
                  <h2 className="font-bold text-[30px] leading-[37.95px] tracking-[3%] text-[#FFFFFF]">
                    {title}
                  </h2>
                  {tracksList[index].length > 4 && (
                    <button
                      onClick={() =>
                        setShowAll((prevShowAll) => {
                          const newShowAll = [...prevShowAll];
                          newShowAll[index] = !newShowAll[index];
                          return newShowAll;
                        })
                      }
                      className="text-[#ADADAD] font-bold text-[16px] leading-[20.24px] tracking-[8%]"
                    >
                      {showAll[index] ? "SHOW LESS" : "SEE ALL"}
                    </button>
                  )}
                </div>
                <div className="flex justify-between gap-5 flex-wrap">
                  {tracksList[index]
                    .slice(0, showAll[index] ? tracksList[index].length : 4)
                    .map((item) => (
                      <ArtistList
                        key={item.id}
                        choosePlay={() => choosePlay(item)}
                        item={item}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="fixed w-full bottom-0 left-0">
            <PlayBack
              setPlaying={setPlaying}
              playing={playing}
              setPlay={setPlay}
              play={play}
              accessToken={accessToken}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
