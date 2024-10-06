import React from "react";

const Input = ({ state, setState, label }) => {
  return (
    <div className="flex flex-col  ">
      <label className="text-sm font-sans my-1" htmlFor="">
        {label}
      </label>
      <input
        className="border rounded-sm max-w-xs px-1 py-1 text-sm focus:border-indigo-500"
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
