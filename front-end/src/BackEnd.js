import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:8000/" });

// instance.defaults.headers.common["x-access-token"] = JSON.parse(
//   localStorage.getItem("token")
// );
export default instance;