import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAGE-nM3sbD7kOiJQYIbXjzjcJW1nJdvco",
  },
});


export default request