import {
  baseUrlConst,
  getAllPropertyConst,
  getPropertyByIdConst,
} from "@/lib/constants/api";
import axios from "axios";

axios.defaults.baseURL = baseUrlConst;

export async function GetAllPropertyApi() {
  return await axios.get(`${getAllPropertyConst}`).then((data) => {
    return data.data;
  });
}

export async function GetPropertyApi(id: number) {
  return await axios
    .get(`${getPropertyByIdConst}/${id}?populate=*`)
    .then((data) => {
      return data.data;
    });
}
