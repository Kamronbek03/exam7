import create from "zustand";
import axios from "axios";

const useSpotifyStore = create((set) => ({
  accessToken: "",
  tracks: [],
  setAccessToken: (token) => set({ accessToken: token }),

  fetchTracks: async (query) => {
    const { accessToken } = useSpotifyStore.getState();
    if (!accessToken) return;

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${query}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      set({ tracks: response.data.tracks.items });
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  },
}));

export default useSpotifyStore;
