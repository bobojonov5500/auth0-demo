import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-full px-3">
      <div className="relative flex  bg-white shadow-sm border border-slate-200 rounded-lg w-90 ">
        <div className="p-4">
          <span className="font-bold"> userID: {item.userId}</span>
          <h5 className="mb-2 text-slate-800 text-xl font-semibold">
            {item.title}
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            {item.body}
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => navigate(`/post/${item.id}`)}
            >
              Read more
            </button>
            <button
              className="rounded-md bg-blue-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Edit
            </button>
            <button
              className="rounded-md bg-red-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
