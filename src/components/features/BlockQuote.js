import React from "react";

const BlockQuote = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 light:border-gray-500 light:bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 light:text-white">
          {body}
        </p>
      </blockquote>
    </div>
  );
};

export default BlockQuote;
