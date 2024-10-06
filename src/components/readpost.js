import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiCall from "../api-service/api";

const ReadPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["readpost"],
    queryFn: () => ApiCall.GetPost(id),
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return isLoading ? (
    <h1 className="text-center mt-4 text-3xl">Loading...</h1>
  ) : (
    <div className=" max-w-xl border rounded-xl p-4 mx-auto mt-6">
      <p>userID: {data?.userId}</p>
      <p>body: {data?.body}</p>
      <p> title: {data?.title}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-green-500 mt-2 rounded-md py-1 px-4 text-white active:text-black"
      >
        Back
      </button>
    </div>
  );
};

export default ReadPost;
