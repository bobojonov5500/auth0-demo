import axios from "../api-service/base-url";

const options = {
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};
const ApiCall = {
  GetPosts: async () => {
    const { data } = await axios.get("/posts");
    return data;
  },
  GetPost: async (id) => {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
  },
  GetPostComments: async (id) => {
    const { data } = await axios.get(`/posts/${id}/comments`);
    return data;
  },
  PostData: async (body) => {
    const { data } = await axios.post("/posts", body, options);
    return data;
  },
};

export default ApiCall;
