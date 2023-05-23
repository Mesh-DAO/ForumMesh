"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Steam() {
  const key = "FF8782636E097CCF046D63E9B592A200";
  const steamId = "xrowpikadasgalaxias";
  const app_id = "APP_ID_DO_JOGO";
  const context_id = "CONTEXT_ID_DO_INVENTARIO";

  async function get() {
    try {
      const data = await axios.get(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${steamId}`
      );
      console.log(data);
    } catch (error) {
      console.error("Erro ao fazer a solicitação à API da Steam:", error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return <div></div>;
}
