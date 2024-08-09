import axios from "axios";
import { useEffect } from "react";
import useSpotifyStore from "../store/useSpotifyStore";

export const useAuth = () => {
  const { setAccessToken } = useSpotifyStore();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/get-token`)
      .then((res) => {
        setAccessToken(res.data.accessToken);
      })
      .catch((err) => {
        console.error("Failed to fetch access token:", err);
      });
  }, [setAccessToken]);
};
