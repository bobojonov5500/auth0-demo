import { React, useState } from "react";
import Input from "../ui/input";
import ApiCall from "../api-service/api";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const uuid = uuidv4();
  const navigate = useNavigate();

  const HandlePost = async (e) => {
    e.preventDefault();
    const post = { body, title, userId: uuid };
    try {
      if (body !== "" && title !== "") {
        await ApiCall.PostData(post);
        navigate("/");
      } else {
        setError("all fields are required");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-auto max-w-sm rounded-xl border mt-6 py-5 px-8">
      <h4 className="text-center text-2xl text-indigo-500">create new post</h4>
      <form onSubmit={HandlePost}>
        <div className="">
          <Input state={body} setState={setBody} label={"Body"} />
          <Input state={title} setState={setTitle} label={"Title"} />
          <button className="mt-2 bg-indigo-500 rounded-md py-1 px-2 text-white active:text-black">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
