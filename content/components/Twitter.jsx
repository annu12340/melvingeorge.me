import { useState } from "react";

const Twitter = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      className="bg-red-300 shadow rounded-sm py-2 px-1 transition-shadow dura hover:shadow-lg "
      onClick={() => {
        setCount(count + 1);
      }}
    >
      clicked {count}
    </button>
  );
};

export default Twitter;
