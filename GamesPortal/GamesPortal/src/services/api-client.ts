import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a3d05c1e888a49999ceb08a7eedec784",
  },
});
