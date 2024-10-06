import { useQuery } from "@tanstack/react-query";
import React from "react";
import ApiCall from "../api-service/api";
import Card from "./card";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getposts"],
    queryFn: () => ApiCall.GetPosts(),
    refetchOnWindowFocus: false,
  });
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return isLoading ? (
    <h1 className="text-center mt-4 text-3xl">Loading...</h1>
  ) : (
    <div className=" my-4 mx-auto grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {data && data?.map((item, index) => <Card item={item} key={index} />)}
    </div>
  );
};

export default Home;
