import { StorageHelper } from "@/helpers";
import axios from "axios";

const user = StorageHelper.getItem("user");
const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3333/api";

export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${bearerToken}`;
  Api.defaults.headers.common["userId"] = user.id;
}
