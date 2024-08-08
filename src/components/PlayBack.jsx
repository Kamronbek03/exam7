import React from 'react';
import SpotifyWebPlayer from "react-spotify-web-playback";

function PlayBack({ accessToken, play ,setPlay}) {
  return (
    <SpotifyWebPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={play ? [play] : []}
      styles={{ bgColor: "#181818", w: "100%"}}
    />
    );
}

export default PlayBack;
