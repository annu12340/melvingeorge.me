const Tag = ({ name }) => {
  let styleToApply;
  switch (name) {
    case "JavaScript":
      styleToApply = "bg-yellow-400 text-black";
      break;
    case "Nextjs":
      styleToApply = "bg-gray-300 text-black";
      break;
    case "Reactjs":
      styleToApply = "bg-black text-blue-400";
      break;
  }
  return (
    <div className={`text-xl px-3 py-1 rounded-sm ${styleToApply}`}>
      {name}
    </div>
  );
};

export default Tag;
