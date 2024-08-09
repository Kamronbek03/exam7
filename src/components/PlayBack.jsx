import React from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
import useSpotifyStore from "../store/useSpotifyStore";

function PlayBack() {
  const { accessToken, tracks } = useSpotifyStore();
  const [play, setPlay] = React.useState(false);

  return (
    <SpotifyWebPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={play ? [tracks[0]?.uri] : []}
      styles={{ bgColor: "#181818", w: "100%" }}
    />
  );
}

export default PlayBack;
