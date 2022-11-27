import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div>
      <div className="text-center">
        <FaSpinner />
      </div>
    </div>
  );
};

export default Loading;
