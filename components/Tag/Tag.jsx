import { useState, useEffect } from "react";

const Tag = ({ name }) => {
  // style to apply
  const [styleToApply, setStyleToApply] = useState("");

  // set state
  useEffect(() => {
    switch (name) {
      case "JavaScript":
        setStyleToApply("bg-yellow-400 text-black");
        break;
      case "Nextjs":
        setStyleToApply("bg-gray-300 text-black");
        break;
      case "Reactjs":
        setStyleToApply("bg-black text-blue-400");
        break;
      case "Resource":
        setStyleToApply("bg-blue-300 text-gray-800");
        break;
      case "HTML5":
        setStyleToApply("bg-orange-600 text-white");
        break;
      case "CSS":
        setStyleToApply("bg-blue-500 text-white");
        break;
      case "Hacktoberfest":
        setStyleToApply("bg-blue-900 text-pink-500");
        break;
      case "Node.js":
        setStyleToApply("bg-green-600 text-gray-100");
        break;
      case "Git":
        setStyleToApply("bg-orange-300 text-orange-900");
        break;
    }
  }, [name]);

  return (
    <div className={`text-xl px-3 py-1 rounded-sm ${styleToApply}`}>{name}</div>
  );
};

export default Tag;
