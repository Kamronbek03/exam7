import axios from "axios";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Token olish uchun so'rov yuboramiz
    axios
      .get("http://localhost:5173/get-token") // Token olish uchun mos endpoint
      .then((res) => {
        console.log(res.data); // Tekshirish uchun
        setAccessToken(res.data.accessToken); // Tokenni holatga saqlash
        setError(null); // Xatolik yo'q
      })
      .catch((err) => {
        console.error(err); // Xatolikni konsolga chiqarish
        setError("Failed to fetch access token."); // Xatolikni holatda saqlash
      });
  }, []);

  return { accessToken, error };
};
