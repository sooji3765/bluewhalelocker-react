import axios from "axios";

export function getInfo(id) {
  return axios.get("http://localhost:8080/users" + id);
}
